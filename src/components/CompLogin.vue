<template>
  <div class="wrapper-login">
      <h3 class="title">login</h3>
      <div class="form-control" v-bind:class="{ error: errorId.length !== 0}">
          <div>ID</div>
          <input
            type="text" 
            v-bind:value="code"
            v-on:input="onCodeChange"
            >
            <div class="text-error">{{ errorId }}</div> 
      </div>
      <div class="form-control" v-bind:class="{ error: errorPassword.length !== 0}">
          <div>Mật khẩu</div>
          <input 
            type="password" 
            v-bind:value="password"
            v-on:input="onPasswordChange"
            >
          <div class="text-error">{{ errorPassword}}</div> 
      </div>
      <button 
        class="btn-login"
        v-on:click="login"
      >login</button>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            code: '',
            password: '',
            errorId: '',
            errorPassword: ''
        }
    },
    methods: {
        onCodeChange(e) {
            this.code = e.target.value
            this.errorId = ''
        },
        onPasswordChange(e) {
            this.password = e.target.value
            this.errorPassword = ''
        },
        login() {
            if(this.code.length !== 0 && this.password.length !== 0){
                const regexId = /^[0-9]{6,7}$/
                const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#%*?&])[A-Za-z\d@$#%*?&]{8,15}$/
                if(regexId.test(this.code)) {
                    if(regexPassword.test(this.password)) {
                        this.$router.push('/home')
                    }else {
                        this.errorPassword = "Từ 8 đến 15 ký tự, ít nhất một ký tự hoa, thường, số và ký tự đặc biệt"
                    }
                }else {
                    this.errorId = 'Id là số chứa 6 hoặc 7 kí tự'
                }
            }else {
                if(this.code.length == 0) {
                    this.errorId = 'Vui lòng nhập id'
                }
                if(this.password.length == 0) {
                    this.errorPassword = 'Vui lòng nhập mật khẩu'
                }
            } 
        }
    },
    // watch: {
    //     isIdError() {
    //         if(this.code.length === 6 || this.code.length === 7) {
    //             return false
    //         }
    //         return true
    //     }
    // }
}
</script>

<style>
.wrapper-login {
    height: 250px;
    width: 450px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    padding: 10px 15px;
}

.wrapper-login .title {
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
    margin-bottom: 28px;
}

.form-control {
    margin-bottom: 22px;
    position: relative;
}

.form-control.error input{
    border: #eb3232 solid 1px;

}

.form-control.error .text-error {
    display: block;
}

.form-control input {
    width: 100%;
    height: 35px;
    font-size: 14px;
    border: #ccc solid 1px;
    border-radius: 2px;
    outline: none;
    padding: 0 6px;

}

.text-error {
    color: #eb3232;
    position: absolute;
    bottom: -18px;
    left: 0;
    font-size: 14px;
    display: none;
}

.btn-login {
    padding: 8px 15px;
    background-color: #1976d2;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 500;
}

</style>