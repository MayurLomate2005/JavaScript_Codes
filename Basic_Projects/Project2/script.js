const form = document.querySelector("form")

form.addEventListener("submit",function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")
    const result_2 = document.querySelector("#result_2")

    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML = `Please Enter Valid height !`
    }else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please Enter Valid height !`
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `Your Bmi is ${bmi}`

        if(bmi < 18.6){
            result_2.innerHTML = `You are Under Weight`
        }
        else if(bmi>=18.6 && bmi<=24.9){
            result_2.innerHTML = `You are in Normal Range of Bmi`
        }
        else if(bmi > 24.9){
            result_2.innerHTML = `You are OverWeight`

        }

    }





})