
        const form = document.getElementById('registrationForm');
        const submitButton = document.getElementById('submitButton');
        const fields = {
            name: document.getElementById('name'),
            email: document.getElementById('email'),
            age: document.getElementById('age'),
            profession: document.getElementById('profession'),
            password: document.getElementById('password'),
            agree: document.getElementById('agree')
        };

        const errors = {
            nameError: document.getElementById('nameError'),
            emailError: document.getElementById('emailError'),
            ageError: document.getElementById('ageError'),
            professionError: document.getElementById('professionError'),
            passwordError: document.getElementById('passwordError'),
            agreeError: document.getElementById('agreeError')
        };

        const validateForm = () => {
            let isValid = true;

            
            if (!fields.name.checkValidity()) {
                errors.nameError.style.display = 'block';
                isValid = false;
            } else {
                errors.nameError.style.display = 'none';
            }

            
            if (!fields.email.checkValidity()) {
                errors.emailError.style.display = 'block';
                isValid = false;
            } else {
                errors.emailError.style.display = 'none';
            }

            
            if (!fields.age.checkValidity()) {
                errors.ageError.style.display = 'block';
                isValid = false;
            } else {
                errors.ageError.style.display = 'none';
            }

            
            if (!fields.profession.checkValidity()) {
                errors.professionError.style.display = 'block';
                isValid = false;
            } else {
                errors.professionError.style.display = 'none';
            }

            if (!fields.password.checkValidity()) {
                errors.passwordError.style.display = 'block';
                isValid = false;
            } else {
                errors.passwordError.style.display = 'none';
            }

            
            if (!fields.agree.checked) {
                errors.agreeError.style.display = 'block';
                isValid = false;
            } else {
                errors.agreeError.style.display = 'none';
            }

            
            submitButton.disabled = !isValid;

            return isValid;
        };

        
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            
            if (validateForm()) {
                console.log({
                    name: fields.name.value,
                    email: fields.email.value,
                    age: fields.age.value,
                    gender: form.elements.gender.value,
                    profession: fields.profession.value,
                    password: fields.password.value
                });

                form.reset();
                submitButton.disabled = true;
            }
        });

        
        Object.values(fields).forEach((field) => {
            field.addEventListener('focus', () => {
                field.style.border = '1px solid #00ff00';
            });

            field.addEventListener('blur', () => {
                field.style.border = '';
                validateForm();
            });
        });