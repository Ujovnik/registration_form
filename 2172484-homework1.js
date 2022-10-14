function formValidation()
        {
            var fname = document.forms['registration']['fname'];
            var useridchars = /^[A-Za-z0-9_-]+$/
            var numbers = /^[0-9]+$/
            var numberdash = /^[0-9-]+$/
            var pwcapitalchars = /[A-Z]/g;
            var pwlowerchars = /[a-z]/g;
            var pwnumber = /[a-z]/g;
            var namesymbols = /^[A-Za-z`-]+$/
            var midint = document.forms['registration']['midint'];
            var lname = document.forms['registration']['lname'];
            var userid = document.forms['registration']['userid'];
            var password = document.forms['registration']['password'];
            var passwordr = document.forms['registration']['passwordr'];
            var ssn = document.forms['registration']['ssn'];     
            
                // || fname.match(letters) != true || fname.match(symbols) != true
            if(fname.value.length < 1 || fname.value.length >= 30)
            {
                //document.getElementById("afname").innerHTML = 
                alert("First Name must be longer than 1 character and shorter than 30");
                return false;
            }
            else if(!(fname.value.match(namesymbols)))
            {
                alert("First Name can have only letters, apostrophes and dashes only")
            }
            else if(midint.value.match(numbers))
            {
                alert("Middle Name can't have digits");
                return false;
            }
            else if(lname.value.length < 1 || lname.value.length >= 30)
            {
                alert("Last Name must be longer than 1 character and shorter than 30"); 
                return false;
            } 
            else if(!(ssn.value.length == 11))
            {
                alert("Please enter valid SSN")
            }
            else if(!(ssn.value.match(numberdash)))
            {
                alert("Please enter valid SSN")
            }
            else if(!(lname.value.match(namesymbols)))
            {
                alert("Last Name can have only letters, apostrophes and dashes only")
            }
            else if(!(userid.value.match(useridchars)))
            {
                alert("Username can have only letters, digits, underscore or dash")
                return false;
            }
            else if(userid.value.length <= 5 || userid.value.length >= 20)
            {
                alert("Username must contain at least 5 and maximum of 20 characters"); 
                return false;
            }
            else if(password.value.length < 8 || password.value.length >= 20)
            {
                alert("Password must contain at least 8 and maximum of 20 characters")
                return false;
            }
            else if(!(password.value.match(pwcapitalchars)))
            {
                alert("Password must contain at least 1 capital letter")
                return false; 
            }
            else if(!(password.value.match(pwlowerchars)))
            {
                alert("Password must contain at least 1 lowercase letter")
                return false; 
            }
            else if(!(password.value.match(pwnumber)))
            {
                alert("Password must contain at least 1 digit letter")
                return false; 
            }
            else if((password.value === userid.value))
            {
                alert("UserID and password cannot be the same")
            }
            else if(!(password.value === passwordr.value))
            {
                alert("Password suppose to match")
                return false; 
            }
            else 
            {
                alert("Form Successfully Submitted");
                return true;
            }
            
        
        }

        function submitThank()
        {
            alert("Thank you, the form has been submitted");
        }

        function addDash(element) 
        {
            let ele = document.getElementById("ssn");
            ele = ele.value.split('-').join(''); // Remove dash (-) if mistakenly entered.
          
            let finalVal = ele.match(/.{1,3}/g).join('-');
            document.getElementById("ssn").value = finalVal;
          }