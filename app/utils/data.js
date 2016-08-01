import mapOrCall from 'utils/map-or-call'


const denormalizeRelationships = (memo, { relationships, type, id }) => {
    if (!relationships) return memo
    Object.keys(relationships).forEach((key) => {
        if (typeof relationships[key] === 'undefined') return
        if (relationships[key] === null) {
            return memo[type][id][key] = null
        }
        memo[type][id][key] = mapOrCall(
            relationships[key],
            (modelRef) => (memo[modelRef.type] || {})[modelRef.id]
        )
    })
    return memo
}

const extendModelsCb = (state) => (memo, resource) => {
    const { type, id, relationships } = resource
    memo[type] = memo[type] || { ...state[type] }
    const oldModel = memo[type][id]
    const oldRelationships = oldModel ?
        oldModel.relationships :
        null

    memo[type][id] = {
        ...oldModel,
        ...resource,
        relationships: {
            ...oldRelationships,
            ...relationships
        }
    }
    return memo
}

export default (state, action) => {
    if (!(action.payload && action.payload.data)) return state
    let { data, included } = action.payload
    let resources = Array.isArray(data) ? data : [data]
    if (included) resources = resources.concat(included)

    const newState = {
        ...state,
        _fetchedAt: Date.now()
    }
    resources.reduce(extendModelsCb(state), newState)

    return newState
}
