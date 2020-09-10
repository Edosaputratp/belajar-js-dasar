// //tugas perulangan
// document.write("<br>")
// for (var y = 1; y < 6; y++) {
//     for (var x = 1; x < 6; x++) {
//         if (y == 1) {
//             document.write("o");
            
//         } else if (x == 1 ) {
//             document.write("o");
            
//         } else if (x == 5) {
//             document.write("1");
            
//         } else if (y == 5 ) {
//             document.write("-");
            
//         } else {
//             document.write("-")
//         }
//     }
// }    

for (var y = 1; y <= 9; y++) {
    for (var x = 1; x <= 9; x++) {
        document.write(`( ${y}, ${x} )`)   
    }
    document.write('<br>')
}

document.write('<br>')

for (var y = 1; y <= 9; y++) {
     for (var x = 1; x <= 9; x++) {
         if (y == 1) {
             document.write("0")
             } else if (x ==1){
                 document.write("0")
             } else if (y ==5){
                 document.write("0")
             } else if (y ==9 ){
                  document.write("0")              
             } else {
                 document.write('')
             }
            }
            document.write('<br>')
        }
        document.write('<br>')
    

        for (var y = 1; y <= 5; y++) {
            for (var x = 1; x <= 5; x++) {
                if (x == 1) {
                    document.write("0")
                    } else if (y ==x ){
                        document.write("0")
                    }  else if (x ==5 ){
                         document.write("0")              
                    } else {
                        document.write("- ")
                    }  
                   
                }document.write("<br>") 
            }
            document.write("<br>") 

            for (var y = 1; y <= 5; y++) {
                for (var x = 1; x <= 5; x++) {
                    if (y ==1) {
                        document.write("0")
                    } else if (x ==1) {
                        document.write("0")
                    } else if (y ==5) {
                        document.write("0")
                    } else if (x ==3 && y==3 || x ==4 && y==3 || x ==5 && y==3 || y==4 && x==5) {
                        document.write("0") 
                    }else {
                        document.write(" -")
                    }
                     
                
            }
            document.write("<br>")

        }
        document.write("<br>")

        for (var y = 1; y <= 5; y++) {
            for (var x = 1; x <= 5; x++) {
                if (x==1) {
                    document.write("0")
                } else if (y ==5){
                    document.write("0")
            
                } else {
                    document.write("-")
                }
            }
            document.write("<br>")
        }
        document.write("<br>")

        for (var y =1; y <= 5; y++) {
            for (var x = 1; x <=5; x++) {
                if (x==3) {
                     document.write("0")
                } else {
                    document.write("- ")

                }
            }
            document.write("<br>")
        }
    document.write("<br>")

    for (var y =1; y <= 5; y++) {
        for (var x = 1; x <=5; x++){
           if (y ==1) { 
               document.write("0")          
            }else if (y ==3){
               document.write("0")
            } else if (y ==5) {
               document.write("0")
            } else if (y ==2 && x==1 || y ==5 && x==4 || y ==4 && x==5) {
               document.write("0")
            }else {
              document.write("- ")
          }
        }document.write("<br>")
    }   
    document.write("<br>")

    for (var y = 1; y <= 5; y++) {
        for (var x = 1; x <= 5; x++) {
            if (x==5) {
                document.write("0")
            } else if (x ==1) {
                document.write("0")
            } else if (y ==3) {
                document.write("0")
            }else {
                document.write(" -")
            }
        }document.write("<br>")
    }

   
