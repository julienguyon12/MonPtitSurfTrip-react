import React from 'react';
import Hero from '../Components/Hero';
import { useParams, Link } from 'react-router-dom';
import { spot } from '../data/data';
import CardReport from '../Components/CardReport';
import '../Style/Spots.scss';
import CardAround from '../Components/CardAround';
import CardMoove from '../Components/CardMoove';
import SpotCard from '../Components/SpotCard';
import Gallerie from '../Components/Gallerie';

const Spots = () => {
  const { id } = useParams();
  const spotItem = spot[id];
  return (
    <div className='spots'>
      <Hero background={spotItem.imgHeader} title={spotItem.title} />
      <section className='report'>
        <h1>{spotItem.pays}</h1>
        <h3>{spotItem.title}</h3>
        <p className='p-desc'>{spotItem.description}</p>
        <span className='underline'>REPORT</span>
        <div className='card'>
          <CardReport
            title={'Niveau de difficulté'}
            rate={spotItem.niveau}
            leg1={'Débutant'}
            leg2={'Expert'}
            desc={spotItem.niveauDescription}
            img={`${process.env.PUBLIC_URL}/assets/logos/surf.png`}
          />
          <CardReport
            title={'Qualité du spot'}
            rate={spotItem.qualite}
            leg1={'Médiocre'}
            leg2={'Exceptionnelle'}
            desc={spotItem.qualiteDescription}
            img={`${process.env.PUBLIC_URL}/assets/logos/qualite.png`}
          />
          <CardReport
            title={'Fréquentation du spot'}
            rate={spotItem.frequentation}
            leg1={'Vide'}
            leg2={'Surpeuplé'}
            desc={spotItem.frequentationDescription}
            img={`${process.env.PUBLIC_URL}/assets/logos/bagarre.png`}
          />
          <CardReport
            title={'Paysage'}
            rate={spotItem.paysage}
            leg1={'Affreux'}
            leg2={'Epoustouflant'}
            desc={spotItem.paysageDescription}
            img={`${process.env.PUBLIC_URL}/assets/logos/paysage2.png`}
          />
          <CardReport
            title={'Localisme'}
            rate={spotItem.localisme}
            leg1={'Accueillant'}
            leg2={'Agressif'}
            desc={spotItem.localismeDescription}
            img={`${process.env.PUBLIC_URL}/assets/logos/localisme.png`}
          />
          <CardReport
            title={'Accessibilité'}
            rate={spotItem.accessibilite}
            leg1={'Facile'}
            leg2={'Difficile'}
            desc={spotItem.accessibiliteDescription}
            img={`${process.env.PUBLIC_URL}/assets/logos/acces.png`}
          />
          <CardAround
            title={'Meilleure marée'}
            desc={spotItem.maree}
            img={`${process.env.PUBLIC_URL}/assets/logos/maree.png`}
          />
          <CardAround
            title={'Fond'}
            desc={spotItem.fond}
            img={`${process.env.PUBLIC_URL}/assets/logos/fond.png`}
          />
          <CardAround
            title={'Saison'}
            desc={`La meilleure saison surf se situe entre ${
              spotItem.saison[0]
            } et ${spotItem.saison[spotItem.saison.length - 1]}`}
            img={`${process.env.PUBLIC_URL}/assets/logos/saison.png`}
          />
          <div className='baroud'>
            <h4>L'astuce du baroudeur</h4>
            <img
              src={`${process.env.PUBLIC_URL}/assets/logos/baroudeur.png`}
              alt=''
            />
            <p>{spotItem.astuce}</p>
          </div>
        </div>
      </section>
      <section className='moove'>
        <span className='underline'>Bouger</span>
        <div className='container'>
          <CardMoove
            title={'Ou loger ?'}
            desc={spotItem.loger}
            img={`${process.env.PUBLIC_URL}/assets/loger/amarillo.JPG`}
          />
          <CardMoove
            title={'Ou Manger ?'}
            desc={spotItem.manger}
            img={`${process.env.PUBLIC_URL}/assets/manger/manger.JPG`}
          />
          <CardMoove
            title={'Ou sortir ?'}
            desc={spotItem.sortir}
            img={`${process.env.PUBLIC_URL}/assets/sortir/sortir.JPG`}
          />
        </div>
      </section>
      <Gallerie pictures={spotItem.imgGalerie} />
      <section className='other'>
        <span className='underline'>Autour</span>
        <div className='around'>
          {spot
            .filter(
              (countrie) =>
                countrie.pays === spotItem.pays && countrie.id !== spotItem.id
            )
            .map((item, idx) => (
              <Link to={`/spots/${item.id}`} key={idx}>
                <SpotCard
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  imgitem={item.imgitem}
                />
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Spots;
