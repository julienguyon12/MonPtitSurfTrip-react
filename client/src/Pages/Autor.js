import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import '../Style/Autor.scss';

const Autor = () => {
  const formationVarient = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 500 },
    cache: { opacity: 0, x: -500 },
  };
  const control = useAnimation();
  const control2 = useAnimation();
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
    if (inView2) {
      control2.start('visible');
    } else {
      control2.start('cache');
    }
  }, [control, inView, control2, inView2]);
  return (
    <div className='autor'>
      <img
        src={`${process.env.PUBLIC_URL}/assets/moi/moi-square.png`}
        alt=''
        className='me'
      />
      <h1>Qui suis-je ?</h1>
      <p className='desc'>
        Ingénieur de formation j'ai décidé de tout quitter pour commencer un
        long voyage. Ce voyage ayant pour but de prendre du temps pour moi et de
        me consacrer à mes deux passions: le surf et le code. C'est ainsi que
        j'ai créé ce site afin de guider d'autres aventuriers. Retrouvez ici mon
        parcours.
      </p>
      <section className='parcour'>
        <span className='underline'>Mon parcours</span>
        <div className='formation' ref={ref}>
          <motion.div
            className='detail'
            variants={formationVarient}
            animate={control}
            initial='hidden'
            transition={{ type: 'spring', stiffness: 30 }}
          >
            <h3>Ma formation</h3>
            <p>
              Originaire de Toulouse c'est dans cette même ville que je réalise
              mes 5 ans en école d'ingénieur à l'ICAM. Mon diplôme obtenue
              j'entre dans la vie active avec l'intention d'être un ingénieur
              humain avant tout.
            </p>
          </motion.div>
          <motion.div
            variants={formationVarient}
            animate={control}
            initial='hidden'
            transition={{ type: 'spring', stiffness: 30 }}
            className='wrap'
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/moi/IMG_4093.JPG`}
              alt=''
            />
          </motion.div>
        </div>
        <div className='exp-pro' ref={ref2}>
          <motion.div
            className='detail'
            variants={formationVarient}
            animate={control2}
            initial='cache'
            transition={{ type: 'spring', stiffness: 30 }}
          >
            <h3>Mon expérience pro</h3>
            <p>
              Je travaille alors durant 3 années dans les travaux publics au
              sein de l'entreprise COLAS. Une aventure riche de défis et de
              rencontres de toute sorte.
            </p>
          </motion.div>
          <motion.div
            className='wrap'
            variants={formationVarient}
            animate={control2}
            initial='cache'
            transition={{ type: 'spring', stiffness: 30 }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/moi/colas.jpg`}
              alt=''
            />
          </motion.div>
        </div>
      </section>
      <section className='travel'>
        <span className='underline'>Mon Voyage</span>
        <p>
          Apres 3 années intenses dans les BTP, un second souffle s’impose à
          moi. Je décide alors de faire un long voyage en vue de me recentrer
          sur mes vraies passions. En novembre 2021, j’atterris en Amérique du
          Sud puis je prends ensuite la direction de l’Indonésie 8 mois plus
          tard.
        </p>
      </section>
    </div>
  );
};

export default Autor;
