
        const switchBtn = document.getElementById('voiceToggle');
        const usernameSection = document.getElementById('usernameSection');
        const loadingSection = document.getElementById('loadingSection');
        const verifyModal = document.getElementById('verifyModal');
        
        let timeLeft = 300;
        let timerInterval = null;
        const timerDisplay = document.getElementById('countdownTimer');

        const saudiUsers = [
            "عبدالرحمن الشمري", "سارة القحطاني", "محمد العتيبي", "نورة الدوسري", "فهد الحربي", "ريم المطيري",
            "خالد الغامدي", "العنود الزهراني", "سعود الشهري", "شهد المالكي", "سلطان العنزي", "منى الرشيدي",
            "عبدالعزيز البقمي", "مها العسيري", "مشاري العتيبي", "ريناد القحطاني", "تركي الغامدي", "ديما الحربي",
            "نايف الدوسري", "لجين الشمري", "راكان الزهراني", "جود الشهري", "فيصل المالكي", "ليان العسيري",
            "بندر الرشيدي", "حلا البقمي", "ماجد العنزي", "غادة العتيبي", "سعود السبيعي", "أمل القحطاني",
            "عبدالله الهاجري", "أروى الشمري", "وليد الحربي", "بسمة الغامدي", "مشعل الزهراني", "ريناد الشهري",
            "طلال الدوسري", "سارة العنزي", "زياد المطيري", "فاطمة العتيبي", "ياسر القحطاني", "نادية الغامدي",
            "عمر الحربي", "منى الدوسري", "ثامر الشمري", "أريج الحارثي", "باسم الرويلي", "نجود العتيبي",
            "حسام الجحدلي", "وجدان الغامدي", "حمزة الزهراني", "طيف الشهري", "خالد الثبيتي", "شروق القحطاني",
            "ريان السلمي", "رند الحربي", "سامي العصيمي", "خلود الدوسري", "طارق الخالدي", "لمى المطيري",
            "عادل الرويلي", "شوق الشمري", "فراس الغامدي", "سديم الزهراني", "معاذ الشهري", "غلا العسيري",
            "هاني الحارثي", "يارا المالكي", "وائل البقمي", "أميرة القحطاني", "يزيد العتيبي", "جواهر الحربي",
            "قصي الشمري", "سحاب الدوسري", "نوح الزهراني", "أثير الغامدي", "إياد المطيري", "وسن الشهري",
            "أنس الرشيدي", "بيسان العنسي", "عبدالمجيد السبيعي", "الجوهرة الشمري", "متعب القحطاني", "ميار العتيبي",
            "بدر الحربي", "وتين المطيري", "نايف الغامدي", "أفنان الزهراني", "حمد الشهري", "غيداء المالكي",
            "باسم العنزي", "هيفاء الرشيدي", "تركي البقمي", "كيان العسيري", "عزام العتيبي", "وسن القحطاني",
            "سلمان الغامدي", "ريماس الحربي", "حاتم الدوسري", "نوال الشمري", "أيمن الزهراني", "أماني الشهري",
            "جهاد المالكي", "جنان العسيري", "مهند الرشيدي", "دانة البقمي", "منصور العنزي", "رغد العتيبي",
            "فارس السبيعي", "جوري القحطاني", "سعد الهاجري", "رزان الشمري", "اصيل الحربي", "جمانة الغامدي",
            "توفيق الزهراني", "هيا الشهري", "مؤيد الدوسري", "لُجين العنزي", "مروان المطيري", "رِفال العتيبي",
            "مازن القحطاني", "ناريمان الغامدي", "عصام الحربي", "ناردين الدوسري", "فادي الشمري", "ريما الزهراني",
            "رائف الشهري", "سما المالكي", "صفوان العسيري", "سيدرا الرشيدي", "شادي البقمي", "شاهندة العنزي",
            "طارق العتيبي", "شيرين السبيعي", "عاطف القحطاني", "صافية الهاجري", "طلعت الشمري", "ضحى الحربي",
            "عبادة الغامدي", "طيبة الزهراني", "عدنان الشهري", "عائشة الدوسري", "غسان المطيري", "عبير العتيبي",
            "فاروق القحطاني", "عفاف الغامدي", "قاسم الحربي", "عُلا الشمري", "كاظم الزهراني", "غادة الشهري",
            "كرم المالكي", "غزل العسيري", "لؤي الرشيدي", "فاخرة البقمي", "مأمون العنزي", "فريدة العتيبي",
            "مالك السبيعي", "فيروز القحطاني", "منتصر الهاجري", "كوثر الشمري", "منير الحربي", "لطيفة الغامدي",
            "نادر الزهراني", "لمياء الشهري", "هاشم الدوسري", "مرفت المطيري", "هيثم العتيبي", "مروة القحطاني",
            "وسيم الغامدي", "ملاك الحربي", "يعقوب الشمري", "منال الزهراني", "يوسف الشهري", "مي المالكي",
            "يونس العسيري", "ميساء الرشيدي", "بشير البقمي", "ميسم العنزي", "حاتم العتيبي", "نادية السبيعي",
            "خلف القحطاني", "ناهد الهاجري", "راجي الشمري", "نجلاء الحربي", "رمزي الغامدي", "نسرين الزهراني"
        ];

        function startLiveToast() {
            const toast = document.getElementById('liveToast');
            const content = document.getElementById('toastContent');
            
            setInterval(() => {
                const randomName = saudiUsers[Math.floor(Math.random() * saudiUsers.length)];
                content.innerHTML = `🇸🇦 قام <b>${randomName}</b> بتفعيل المايك الآن`;
                toast.classList.add('show');
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 2000);
            }, 3000);
        }
        startLiveToast();

        function updateTimerDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (timeLeft <= 60) {
                timerDisplay.classList.add('warning');
            }
            
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerDisplay.textContent = '00:00';
                verifyModal.style.display = 'none';
                alert("انتهت صلاحية العرض! الرجاء تحديث الصفحة للمحاولة مرة أخرى.");
            }
        }

        function startTimer() {
            if (timerInterval) clearInterval(timerInterval);
            timeLeft = 300;
            updateTimerDisplay();
            timerInterval = setInterval(() => {
                if (timeLeft > 0) {
                    timeLeft--;
                    updateTimerDisplay();
                } else {
                    clearInterval(timerInterval);
                }
            }, 1000);
        }

        function stopTimer() {
            if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
            }
        }

        switchBtn.addEventListener('click', function() {
            this.classList.add('active');
            setTimeout(() => {
                usernameSection.style.display = 'flex';
            }, 500);
        });

        function submitUsername() {
            const usernameInput = document.getElementById('robloxUsername');
            const username = usernameInput.value.trim();
            
            if(username === "") {
                alert("الرجاء إدخال اسم المستخدم!");
                return;
            }
            
            localStorage.setItem('roblox_username', username);
            usernameSection.style.display = 'none';
            loadingSection.style.display = 'flex';
            
            const progressBar = document.getElementById('progressBar');
            const loadingText = document.getElementById('loadingText');
            let progress = 0;
            
            const progressInterval = setInterval(() => {
                progress += 5;
                progressBar.style.width = progress + '%';
                
                if(progress === 30) {
                    loadingText.textContent = "جاري التحقق من مطابقة الحساب...";
                } else if(progress === 70) {
                    loadingText.textContent = "جاري تحضير سيرفرات التفعيل...";
                }
                
                if(progress >= 100) {
                    clearInterval(progressInterval);
                    loadingSection.style.display = 'none';
                    verifyModal.style.display = 'flex';
                    startTimer();
                }
            }, 150);
        }

        function redirectTo(server) {
            stopTimer();
            let link = "https://app.trcefy.com/sl?id=6a2050db46d3cf0d62f32aa4&pid=2&sub2=u203370&sub6=s2smartLink&sub5=s1SUBID1HERE";
            window.location.href = link;
        }

        window.onclick = function(event) {
            if (event.target === verifyModal || event.target === usernameSection || event.target === loadingSection) {
                return;
            }
        }
    