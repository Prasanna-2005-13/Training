/*let userDetails = {
    empid : "1",
    empGender : "Male",
    empcompany :"Amazon",
    empsalary : "30,000",
    empaddress : "Hyderabad",
    empaddress:{
        city:"Hyd",
        area :{
            areaName:"Hitech",
            pincode :123456
        }
    }
}
console.log(userDetails)



let usersDetails = [
    {
        name:"Ramya",
        city:"Guntur"
    },
    {
        name:"Sai Nikhil",
        city:"Karimnagar"
    },
    {
        name:"Rahul",
        city:"Ananthpur"
    },
    {
         name:"Vaishali",
         city:"Nizambad"
        },
        {
            name:"Priya",
            city:"Kadapa"
        }
    ];
    usersDetails.map((x)=>{
        console.log(x.name);
    })
    console.log(usersDetails[3].name);
    */


    let array1=[{
        empid:1,
        empname:"Ram",
        empcompany:"aaa",
        empsalary:"sss",
        empaddress:{
            empcity:"adb",
            emparea:"aaa"
            
}
    },{
        empid:2,
        empname:"Sita",
        empcompany:"aaa1",
        empsalary:"sss1",
        empaddress:{
            empcity:"adb1",
            emparea:"aaa1"
            
}
    }
    ]
    array1.map((user)=>{
        store.innerHTML+=`
       <tr>
      <td>${user.empid} </td>
       <td>${user.empname} </td>
        <td>${user.empcompany} </td>
        <td>${user.empsalary} </td>
        <td>${user.empaddress.empcity} </td>
        <td>${user.empaddress.emparea} </td>
        </tr>`
})