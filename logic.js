
class Landing{
    //property
     dataBase = {
        "Milan":  {username:"Milan", password:"Milan123"},
        "Manu" : {username:"Manu", password:"Mnu123"},
        "Anu"  :{username:"Anu" ,password:"Anu123"},
        "Manuel" : {username:"Manuel", password:"Manule"}
     }
     //method
      
     save(){
        if(this.dataBase){
            localStorage.setItem("dataBase",JSON.stringify(this.dataBase))
        }
     }

     //get data
     getData(){
       this.dataBase = JSON.parse(localStorage.getItem("dataBase"))
     }

     //method for registration
     register(){
        this.getData()
        
        let user = regUser.value
        let pswd = regpswd.value
        console.log(user,pswd);
        if (user=="" || pswd ==""){
            alert('please fill the form completely')

        }
        else{
            if(user in this.dataBase){
                alert('User already exist');
            }
            else{
                this.dataBase[user]={username:user,password:pswd}
                this.save()
                alert("added suceccfully")
                //for navigation
                window.location='login.html'
            }
        }

     }

     //login
     login(){
        let luser = loginuser.value
        let lpswd = loginpswd.value
        console.log(luser,lpswd);
        if(luser==""||lpswd==''){
            alert('please fill the form completely')
        }
        else{
            if(luser in this.dataBase){
                if(this.dataBase[luser].password==lpswd){
                    alert('login successfully')
                    localStorage.setItem("user",luser)
                    window.location='home.html'

                }else{
                    alert(" wrong username or password")
                }


            }
            else{
                alert("wrong username or password")
            }
        }
     }

}

//object
obj = new Landing()
obj.getData()