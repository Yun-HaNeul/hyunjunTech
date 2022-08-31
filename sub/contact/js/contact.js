$(function () {
    const submitBtn = document.querySelector("#submits");
    const input = document.querySelectorAll(".form_input");
    const textArea = document.querySelector(".textarea");
    function formFunc(){
        //폼 확인
        function formHandler(){
            //프로젝트 유형 선택 안됐을 때
            function prjChk(){
                const checkbox = document.querySelectorAll("input[type='radio']");
                const p_checkbox = document.querySelector("#agree");
                const p_checked = p_checkbox.checked;
                let $value;
                let $is_chked = false;

                checkbox.forEach(function(item){
                    if(item.checked == true){
                        $is_chked = true;
                    }
                })
                if(!$is_chked){
                    submitBtn.disabled = true;
                    alert("프로젝트유형을 선택해주세요.");
                }
            }

            //기본 정보 입력
            function inpormHandler(){
                
                const agree = document.querySelector("#agree");
                const agree_chk = agree.checked;
                let errorCount = document.querySelectorAll(".error").length;
                //필수 정보 입력 안됐을 때
                input.forEach(function(item,index){
                    $value = item.value;
                    if(!$value){

                        
                        if(!item[4].value){
                            submitBtn.disabled = false;
                        }else {
                            item.classList.add('error');
                            submitBtn.value = "항목을 입력해주세요.";
                            submitBtn.style.fontSize = "17px";
                            submitBtn.disabled = true;
                        }
                    }else {
                        submitBtn.disabled = false;
                    }
                    
                })
                //개인 정보 필수 선택안됐을 때
                if(errorCount == 0){
                    console.log(errorCount);
                    if(!agree_chk == 1){
                        alert("개인정보 처리방침에 동의해주세요.");
                        submitBtn.disabled = true;
                    }
                }else {
                    if(!agree_chk == 1){
                        alert("개인정보 처리방침 동의 필수항목을 입력해주세요.");
                        submitBtn.disabled = true;
                    }
                };
            }
            prjChk();
            inpormHandler();
        }
        formHandler();
        
    };
    submitBtn.addEventListener("click",formFunc);
    function insertFunc(){
        input.forEach(function(item){
            item.addEventListener("click",function(){
                this.classList.add("focus");
                this.classList.remove("error");
                submitBtn.disabled = false;
                submitBtn.value = "전송하기";
                submitBtn.style.fontSize = "30px";
            });
            item.addEventListener("focus",function(){
                this.classList.add("focus");
                this.classList.remove("error");
                submitBtn.disabled = false;
                submitBtn.value = "전송하기";
                submitBtn.style.fontSize = "30px";
            })
        });
        textArea.addEventListener("click",function(){
                this.classList.add("focus");
                this.classList.remove("error");
                submitBtn.disabled = false;
                submitBtn.value = "전송하기";
                submitBtn.style.fontSize = "30px";
        });
        textArea.addEventListener("focus",function(){
                this.classList.add("focus");
                this.classList.remove("error");
                submitBtn.disabled = false;
                submitBtn.value = "전송하기";
                submitBtn.style.fontSize = "30px";
        });
    }
    insertFunc();
    /* $('#submits').on("click",function(event){

        let chk = $('#agree').is(':checked');

        if($('#name').val() == ''){
            alert('이름을 입력해주세요')
        }else if($('#company').val() == ''){
            alert('기업명을 입력해주세요.');
        }else if($('#tel').val() == ''){
            alert('연락처를 입력해주세요.');
        }else if($('#email').val() == ''){
            alert('이메일을 입력해주세요.');
        }else if($('#budget').val() == ''){
            alert('예산을 선택해주세요.');
        }else if(!chk){
            alert('개인정보보호정책에 체크해주세요.');
        }else{
            $(this).attr('type','submit').off(event);
            $('#contact-form').each(function(){
                this.reset();
            })
        }
    })
    */
    // formClick
    /*
    function formClick(){
        const inputs = document.querySelectorAll(".form_input");
        const textArea = document.querySelector(".textarea");
        
        inputs.forEach(function(item){
            item.addEventListener("click",function(){
                if(!item.classList.contains("focus")){
                    item.classList.add("focus");
                }else if(item.classList.contains("error")){
                    submitBtn.disabled = false;
                    submitBtn.value = "전송하기";
                    submitBtn.style.fontSize = "30px";
                }
            })
            item.addEventListener("focus",function(){
                if(!item.classList.contains("focus")){
                    item.classList.add("focus");
                }else if(item.classList.contains("error")){
                    submitBtn.disabled = false;
                    submitBtn.value = "전송하기";
                    submitBtn.style.fontSize = "30px";
                }
            })
        })

        textArea.addEventListener("click",function(){
                if(!this.classList.contains("focus")){
                    this.classList.add("focus");
                }else if(this.classList.contains("error")){
                    submitBtn.disabled = false;
                    submitBtn.value = "전송하기";
                    submitBtn.style.fontSize = "30px";
                }
        })
        textArea.addEventListener("focus",function(){
            if(!this.classList.contains("focus")){
                this.classList.add("focus");
            }else if(this.classList.contains("error")){
                submitBtn.disabled = false;
                submitBtn.value = "전송하기";
                submitBtn.style.fontSize = "30px";
            }
    })
    }
    formClick();
    // validation chk
    function formHandler(){
        const input = document.querySelectorAll(".form_input");
        const checkbox = document.querySelectorAll(".radio_btn input[type='radio']");
        const p_checkbox = document.querySelector("#agree");
        const submitBtn = document.querySelector("#submits");
        const p_checked = p_checkbox.checked;
        let $value;

        input.forEach(function(item,index){

            
            $value = item.value;

            if(!$value) {
                if(!index == 4){
                    item.parentNode.classList.add('error');
                    submitBtn.value = "항목을 입력해주세요.";
                    submitBtn.style.fontSize = "17px";
                    submitBtn.disabled = true;
                }
                item.parentNode.classList.add('error');
                    submitBtn.value = "항목을 입력해주세요.";
                    submitBtn.style.fontSize = "17px";
                    submitBtn.disabled = true;
            } else {
                item.parentNode.classList.remove('error');
            }
        })

        let is_chk = false;
        checkbox.forEach(function(item){
            if(item.checked == true){
                is_chk = true;
            }
        });

        if(!is_chk){
            submitBtn.disabled = true;
            alert('프로젝트 종류를 선택해주세요.');
        }
        let $errorCount = document.querySelectorAll(".error").length;

        console.log($errorCount);

        if($errorCount == 0){
            if(!p_checkbox == 1){
                submitBtn.disabled = true;
                alert('개인정보수집동의에 체크해주세요.');
            }else {
                submitBtn.disabled = false;
            }
        }else {
            submitBtn.disabled = true;
        }

        function errorHandler(){
            const errorInput = document.querySelectorAll(".error");
            errorInput.forEach(function(item){
                item.addEventListener("click",function(){
                    submitBtn.disabled = false;
                    submitBtn.value = "전송하기";
                    submitBtn.style.fontSize = "30px";
                })
            })
        }
        errorHandler();
    }
    
    //값 입력 시 에러 제거
    document.querySelector("#submits").addEventListener("click", formHandler);
 */
    //emailJs
    emailjs.init('IMGYi0caHdqRm_EwI');

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        //this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('hyunjuntech', 'template_o3agyue', this)
            .then(function() {
                alert('빠른시일내에 답장 드리겠습니다. 감사합니다.');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });

})