let afeiCheck = {
// 必填项 不能为空
    methods:{
        required(tipMsg = "不能为空"){
            return { required: true, message: tipMsg, trigger: 'blur' }
        },
        repass(oldPsd){
            return {
                validator: (rule, value, callback)=>{
                    if (oldPsd === value){
                        callback()
                    }else{
                        callback(new Error("两次输入的密码不一致"))
                    }
                }, trigger: 'blur' 
            }
            
        }
    }
}

export { afeiCheck }