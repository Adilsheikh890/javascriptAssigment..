let current_users=["Mujahid1","2Sami","Mustafa3",'Ali4',"shafqat5"];
let new_users=['Abid1',"yaseen2",'Mustafa3',"sadan4","shafiq5"];
for(let i=0;i<new_users.length;i++)
{
    
if(current_users.includes(new_users[i]))
{
alert=("Name not available"); 
}else 
{ 
alert=("Name available");
}

}