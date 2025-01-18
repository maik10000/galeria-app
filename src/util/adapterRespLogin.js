 const adapterResLogin = (res) =>({
    token:res?.access_token,
    token_type: res?.token_type,
    expires: res?.expires_in,
    name: res?.name,
    active: res?.state,
})

export default adapterResLogin;