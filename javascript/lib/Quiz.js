


// This is very bad code just did it fast for the project in school :)

const Quiz = (function() {

    // ----- Fake React ------
    function createElement(type, props, ...children) {
        return {
          type,
          props: {
            ...props,
            children: children.map(child =>
                typeof child === "object"
                    ? child
                    : createTextElement(child)
                ),
            }
        }
    }
      
      
    function createTextElement(text) {
        return {
            type: "TEXT_ELEMENT",
            props: {
                nodeValue: text,
                children: [],
          }
        }
    }
      
      
    function render(element, container) {
        const dom =
            element.type == "TEXT_ELEMENT"
            ? document.createTextNode("")
            : document.createElement(element.type)
      
        const isProperty = key => key !== "children"
        Object.keys(element.props)
            .filter(isProperty)
            .forEach(name => {
              if (element.type === 'TEXT_ELEMENT') {
                dom[name] = element.props[name]
              }else {
                dom.setAttribute(name, element.props[name]);
              }
            })
      
        element.props.children.forEach(child =>
            render(child, dom)
        );
      
        container.appendChild(dom);
    }
      
      
    const fr = {
        createElement,
        render,
    }
      
    
      
    
    function createQuizHTML(QUIZ, id, questions) {
        const ARRAY = N => Array.from(Array(N).keys());
    
        fr.render(
    
            
            fr.createElement(
            'div',
            {id : `quiz__wrapper-${id}`},

            ...ARRAY(questions.length).map(slideIndex => fr.createElement(
                'div',
                {
                    class : 'quiz__slide'
                },
                fr.createElement(
                    'p',
                    {class : 'quiz__slide__title'},
                    questions[slideIndex].question
                ),
                fr.createElement(
                    'p',
                    {class : 'quiz__slide__counter'},
                    `${slideIndex + 1} / ${questions.length}`
                ),
                ...ARRAY(questions[slideIndex].posAnswers.length).map(aIndex => fr.createElement(
                    'div',
                    {class : 'quiz__option'},
                    fr.createElement(
                        'input',
                        {
                            type : 'radio',
                            class : 'quiz__input',
                            id : `q-${id}-slide-${slideIndex}__posAnswer-${aIndex}__inp`,
                            name : `q-${id}-slide-${slideIndex}`
                        },
                    ),
                    fr.createElement(
                        'label',
                        {for : `q-${id}-slide-${slideIndex}__posAnswer-${aIndex}__inp`},
                        questions[slideIndex].posAnswers[aIndex]
                    )
                ))
            )),
            fr.createElement(
                'div',
                {class : 'quiz__succese-rate'}, 
                fr.createElement(
                    'div',
                    {class : 'quiz__succese-rate__in'},
                )
            ),

            fr.createElement(
                'p',
                {class : 'quiz__succese-rate__text'}, 
                '0% Richtig'
            ),

            fr.createElement(
                'div',
                {class : 'quiz__buttons'},
                fr.createElement(
                    'div',
                    {},
                    fr.createElement(
                        'button',
                        {class : 'btn-pre quiz__btn'},
                        '🡰'
                    ),
                    fr.createElement(
                        'button',
                        {class : 'btn-next quiz__btn'},
                        '🡲'
                    )
                ),
            ),
    
        ), QUIZ);
    }
    
    
    
    
    class Quiz {
        constructor(ROOT) {
            this.questions = [];
            this.ROOT = document.getElementById(ROOT);
            this.active = 0;
            this.succes = 0;
        }
    
        addQuestion(question, posAnswers, correct) {
            this.questions.push({
                question,
                posAnswers,
                correct
            });
        }
    
        setActive() {
            const slides = this.ROOT.getElementsByClassName('quiz__slide');
    
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('quiz__slide-active');
            }
    
            slides[this.active].classList.add('quiz__slide-active');
        }
    
        quickCheck(nextButton, preButton) {
            preButton.disabled = this.active === 0;
            nextButton.disabled = this.active === this.questions.length - 1;
        }
    
        listen() {
            const nextButton = this.ROOT.getElementsByClassName('btn-next')[0];
            const preButton = this.ROOT.getElementsByClassName('btn-pre')[0];
    
            this.quickCheck(nextButton, preButton);
    
            nextButton.addEventListener('click', _ => {
                this.active = this.active + 1;
    

                this.quickCheck(nextButton, preButton);
                this.setActive();
            });
    
            preButton.addEventListener('click', _ => {
                this.active = this.active - 1;
                    
                this.quickCheck(nextButton, preButton);
                this.setActive();
            });
    
            

            const a = this.ROOT.getElementsByClassName('quiz__input');

            for (let i = 0; i < a.length; i++) {

                a[i].addEventListener('click', () => {
                    this.checkCorrectnes();
                    this.ROOT.getElementsByClassName('quiz__succese-rate__in')[0].style.width = `${this.succes / this.questions.length * 100}%`;
                    this.ROOT.getElementsByClassName('quiz__succese-rate__text')[0].innerHTML = `${this.succes / this.questions.length * 100}% Richtig`;
                });
            
            }
        }
    
        checkCorrectnes() {
            const slides = this.ROOT.getElementsByClassName('quiz__slide');
            let succes = 0;
    
            for (let i = 0; i < slides.length; i++) {
                const slide = slides[i];
    
                const inputs = slide.getElementsByTagName('input');
    
                for (let j = 0; j < inputs.length; j++) {
                    const isChecked = inputs[j].checked;
                    if (isChecked && j === this.questions[i].correct) succes++;
                }
            }
    
            this.succes = succes;
        }

        allChecked() {
            const slides = this.ROOT.getElementsByClassName('quiz__slide');

            for (let i = 0; i < slides.length; i++) {
                const slide = slides[i];
    
                const inputs = slide.getElementsByTagName('input');
                let oneIsChecked = false;

                for (let j = 0; j < inputs.length; j++) {
                    if (inputs[j].checked) {oneIsChecked = true}
                }

                if (!oneIsChecked) return false;
            }

            return true;
        }
    
    
        render() {
            createQuizHTML(this.ROOT, this.ROOT.id.substring(5), this.questions);
        
            this.listen();
            this.setActive(this.active);
        }
    }

    return Quiz;
}());

