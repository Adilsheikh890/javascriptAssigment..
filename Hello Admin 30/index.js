//printing messages for each user who is loggin in the system
let username=["admin","Adil1","Arham2","Sadan3","Rohan4"];
if(username=="admin")
{
    console.log("Hi admin Would you like to see status report");
}
else
{
    for(let i=0; i<2; i++)
    {
        console.log("HI"+username[i]+"Thankyou for login");
    }
    
}