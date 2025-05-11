

const img_container = document.querySelector('.preview');
const img = document.querySelector('.preview img');
const  input = document.querySelector("input")
const fileName = document.querySelector('.file_name');


input.addEventListener('change', function()  {
        const file = this.files[0];
        // console.log(file);

        //so  this basically means if there is file do this.... inside the if statement
        if(file) {
          img_container.style.display = 'block';
        }           {
            const reader = new FileReader ()
            console.log (reader)

            // from this file reader we can get the result of the file

            reader.onload = function() {
                const result = reader.result;
                //now we'll assign the img's src to this result
                img.src = result;
                fileName.innerHTML = file.name;
                //but first we have to show the image priview element which added a display of none
            };
            reader.readAsDataURL(file);
        }
});