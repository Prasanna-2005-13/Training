if(true){
    console.log("If block executing");
}
if(false){
    console.log("If block executing");
}

let age = 17;
if(age >=18){
    console.log("eligible for voting");
}else{
    console.log("Not eligible for voting");
}

age >= 18 ? console.log("Major"):console.log("Minor");

let day = prompt("Enter a day here");

if(day == 1){
    console.log("Sun");
}
else if(day == 2){
    console.log("Mon");
}
else if(day == 3)
     {
        console.log("Tue");
    }
    else if(day == 4)
        {
            console.log("Wed");
        }else if(day == 5)
            {
                console.log("Thu");
            }
            else if(day == 6)
                {
                    console.log("Fri");
                 }else if(day == 7){
                    console.log("Sat");
                }
                else{
                    console.log("Invalid Day");
                }

letday = Number(prompt("Enter a day here"));
console.log(day , typeof(day));
switch (day) {
     case 1:
        console.log("Sun");
        break;
        case 2:
            console.log("Mon");
            break;
            case 3:
                console.log("Tue");
                case 4:
                    console.log("Wed");
                    break;
                    case 5:
                        console.log("Thu");
                        break;
                        case 6:
                            console.log("Fri");
                            break;
                            case 7:
                                console.log("Sat");
                                break;
                                default:console.log("Invalid day");
                                break;
                            }

