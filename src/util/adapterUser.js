const adapterUSER = (res) =>({
    id:res?.id,
    name:res?.name,
    age: res?.age,
    email: res?.email,
    phone: res?.phone,

})

export default adapterUSER;