import isPlainObject from 'is-plain-object'

const DEFAULT_JSON_API_VERSION = '1.0'
const DEFAULT_USE_HTTPS = true

const _encode = value => Array.isArray(value) && !value.length ? '[]' : encodeURI(value)

const encodeParam = (value, key) => {
    if (isPlainObject(value)) {
        return Object.keys(value).reduce((memo, _key) => {
            return `${memo}${key}[${_key}]=${_encode(value[_key])}&`
        }, '')
    } else {
        return `${key}=${_encode(value)}&`
    }
}

const encodeParams = (params) => {
    if (!params) return ''
    return Object.keys(params).reduce((memo, key) =>
        `${memo}${encodeParam(params[key], key)}`
    , '')
}

export default (base, version = DEFAULT_JSON_API_VERSION, useHttps = DEFAULT_USE_HTTPS) =>
    (url, _params) => {
        const separator = url.includes('?') ? '&' : '?'

        const params = _params
            ? encodeParams(_params)
            : ''

        const path = `${url}${separator}` +
        params +
        `json-api-version=${DEFAULT_JSON_API_VERSION}`

        return `${base}${path}`
    }
