var fs = require("fs");

const readline = require("readline");
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

var instructions = () => {
    console.log("1.Create Directory");
    console.log("2.Remove Directory");
    console.log("3.Write FIle");
    console.log("4.Read FIle");
    console.log("5.Delete FIle");
    console.log("6.Append Data To FIle");
    console.log("7.Update / Replace File With New Data");
    console.log("8.Rename File");
    console.log("9.Exit");
    start();
}
var start = () => {
    r1.question("Enter the choice: ", (ans) =>{
        if(ans === "1")
        {
            console.log("Create Directory");
            createdirectory();
        }
        else if(ans === "2")
        {
            console.log("Remove Directory");
            removedirectory();
        }
        else if(ans === "3")
        {
            console.log("Write File:");
            writefile();
        }
        else if(ans === "4")
        {
            console.log("Read File");
            readfile();
        }
        else if(ans === "5")
        {
            console.log("Delete File");
            deletefile();
        }
        else if(ans === "6")
        {
            console.log("Append File");
            appendfile();
        }
        else if(ans === "7")
        {
            console.log("Update / Replace With New Data");
            updatefile();
        }
        else if(ans === "8")
        {
            console.log("rename");
            renamefile();
        }
        else if(ans === "9")
        {
            console.log("Good Bye!!!")
            r1.close();
        }
        else
        {
            console.log("Wrong Choice.Please Try Again.");
            instruction();
        }
    })
}
instructions();


var createdirectory = () =>{
    r1.question("Enter the name of directory you would like to create:", (dirname) =>{
        var dir = "./";
        dir = dir + dirname;
        console.log(dir);
        fs.mkdir(dir,{ recursive: true },(err)=>{
            if (err) throw err;
            
        });
        console.log("directory created succesfully");
        instructions();
       
    });
    
};

var removedirectory = () => {
    r1.question("Enter the name of directory you want to delete:",(dirname) =>{
        fs.rmdir(dirname,()=>{
            console.log("directory deleted");
            instructions();
        });
        console.log("directory not deleted");
        instructions();
    });
};

var writefile = () =>{
    r1.question("Enter the file name you want to write: ",(fname) =>{
        r1.question("Enter the contents of the file : ",(content) =>{
        fs.writeFile(fname+".txt",content,(err) =>{
            if (err) throw err;
            console.log("Write Into File succesfully");
            instructions();
        });
        console.log("Failed");
        instructions();

    });
    });
};

var readfile = () =>{
    r1.question("Enter the filename you want to read: ",(fname)=>{
        fs.readFile(fname+".txt","utf8",(err,data)=>{
            if(err) throw err;
            console.log(data);
            instructions();
        });
        
    });
};
var deletefile = ()=>{
    r1.question("Enter the fiename you want to delete: ",(fname)=>{
        fs.unlink(fname+".txt",(err)=>{
            if(err) throw err;
            console.log("Deleted file Succesfully!!");
            instructions();
        })
    })
}
var appendfile = () =>{
    r1.question("Enter the filename you want to Append: ",(fname)=>{
        r1.question("Enter the contents you want to enter in the file:",(content)=>{
            fs.appendFile(fname+".txt",content,(err)=>{
                if(err) throw err;
                console.log("Appended file succesfully!!");
                instructions();
            });
        });
        
    });
};
var updatefile = () =>{
    r1.question("Enter the file name you want to write in tht file: ",(fname) =>{
        r1.question("Enter the contents of the file : ",(content) =>{
        fs.writeFile(fname+".txt",content,(err) =>{
            if (err) throw err;
            console.log("updated file succesfully");
            instructions();
        });
    });
    });
}
var renamefile = ()=>{
    r1.question("Enter the file name you want to rename:",(fname)=>{
        r1.question("Enter the file name you want to rename your file to:",(filerename)=>{
            fs.rename(fname+".txt",filerename+".txt",(err)=>
            {
                if(err) throw err;
                console.log("Rename file succesfully!!");
                instructions();
            });
        });
    });
};
