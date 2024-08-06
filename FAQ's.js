document.addEventListener('DOMContentLoaded', function () {
    var faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(function (question) {
        question.addEventListener('click', function () {
            var answer = this.nextElementSibling;
            var arrow = this.querySelector('.arrow');
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                arrow.classList.remove('arrow-rotate');
            } else {
                answer.style.display = 'block';
                arrow.classList.add('arrow-rotate');
            }
        });
    });
});