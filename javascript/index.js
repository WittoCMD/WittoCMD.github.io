



const q1 = new Quiz('quiz-1');

q1.addQuestion(
    'Was sind die 3 Hauptteile der Batterie?',
    [
        'Kathode, Anode und Zinksulfatlösung',
        'Kathode, Anode und Elektrolyt',
        'Zinksulfatlösung, Kupfersulfatlösung, Elektrolyt',
        'Kathode, Anode und Zink'
    ],
    1
);

q1.addQuestion(
    'Welche Metalle werden in Daniell-Element verwendet?',
    [
        'Zink und Aluminium',
        'Aluminium und Eisen',
        'Aluminium und Kupfer',
        'Kupfer und Zink'
    ],
    3
);

q1.addQuestion(
    'Welche 2 Reaktionen treten in der Batterie auf?',
    [
        'Photosynthese udn Oxidation',
        'Destillation und Reduktion',
        'Oxidation und Reduktion',
        'Verbrennung und Reduktion'
    ],
    2
);

q1.addQuestion(
    'Die Anode ist ___  ',
    [
        'der Ort, an dem Reduktion stattfindet',
        'der Ort, an dem Oxidation stattfindet'
    ],
    1
);

q1.addQuestion(
    'Was sind Elektrolyte? Die Lösungen, bei denen ___',
    [
        'meisten gelösten Stoffe reduzieren.',
        'meisten gelösten Stoffe als Atomen vorliegen.',
        'meisten gelösten Stoffe als Ionen vorliegen.',
        'meisten gelösten Stoffe oxidieren.'
    ],
    2
);
q1.render();

const q2 = new Quiz('quiz-2');

q2.addQuestion(
    'Wo kommt das meiste Lithium vor?',
    [
        'Bolivien',
        'Chile',
        'Argentinien',
        'China'
    ],
    0
);

q2.addQuestion(
    'Wo kommt das meiste Kobalt vor?',
    [
        'Japan',
        'Bolivien',
        'Demokratische Republik Kongo',
        'Australien'
    ],
    2
);


q2.addQuestion(
    'Wer ist Marktbeherrscher bei der Lithiumproduktion?',
    [
        'China',
        'Kanada',
        'Argentina',
        'Australien'
    ],
    0
);

q2.render();



const q3 = new Quiz('quiz-3');

q3.addQuestion(
    'In welche 3 Teile werden Batterien vor dem Recycling getrennt?',
    [
        'Sie sind nicht getrennt.',
        'Kunststoff, Säure und Schwermetal',
        'Zink, Säure und Schwermetal',
        'Kunststoff, Säure und Kupfer'
    ],
    1
);

q3.addQuestion(
    'Wie viel Prozent der Batterien werden recycelt?',
    [
        '3.141%',
        '12%',
        '5%',
        '7,5%'
    ],
    2
);


q3.render();