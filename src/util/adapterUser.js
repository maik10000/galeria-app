const adapterUSER = (res) =>({
    id:res?.id,
    age: res?.age,
    email: res?.email,
    phone: res?.phone,

})

export default adapterUSER;