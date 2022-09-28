import Image from 'next/image';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Collage from '../collage'


const style = {
  titulo: ' mt-6 mb-2 font-bold text-secondary  may text-center sm:text-start ',
  parrafo: 'mb-2 ml-2'
}


const WhayIsKubics = () => {
  return (
    <>
      <div className='flex items-center h-full px-6 w-12/12 sm:px-10 xl:px-4 '>
        <div className='p-1 mb-6 text-justify text-white rounded-lg shadow-lg shadow-gray-400 sm:p-4 bg-primary'>
          <div className={style.titulo}>
            <FormattedMessage
              id='k?.titulo1'
              defaultMessage='¿ Qué es kubics ?'
            />
          </div>
          <p className={style.parrafo}>
            <FormattedMessage
              id='k?.parrafo1'
              defaultMessage=''
            />
          </p>
          <h4 className={style.titulo}><FormattedMessage
            id='k?.titulo2'
            defaultMessage='¿ Cómo funciona ?'
          />
          </h4>
          <p className={style.parrafo}><FormattedMessage
              id='k?.parrafo2'
              defaultMessage='El modelo operativo de Kubics sucede gracias a la tecnología blockchain, que permite tener transparencia total sobre las transacciones, una estructura de gobierno (DAO), así como la utilización de NFTs para darle un sentido de utilidad a la comunidad Kubics.
            Kubics ofrece la posibilidad de estar más cerca del mundo del cine  participando en una gran producción, siguiendo el proceso de creación y producción de la película en cuestión y  viéndola  crecer hasta llegar al éxito.
            La propuesta  de Kubics es además  proteger, curar estos proyectos  y  garantizar a nuestros holders que estas películas lleguen al público.
          '
            />
            </p>
          <h4 className={style.titulo}><FormattedMessage
            id='k?.titulo3'
            defaultMessage='¿Qué función tienen los NFT ?'
          />
          </h4>
          <p className={style.parrafo}>
          <FormattedMessage
              id='k?.parrafo3'
              defaultMessage='De cada proyecto lanzamos una colección de NFT&#39;s Kubics relacionados con  la película . Estos NFTs ayudarán  a financiar total o parcialmente, ya sea en cualquiera de sus fases : Desarrollo / preproducción , Producción o Postproducción. La mayoría de las películas que vemos han sido financiadas por varias partes, Kubics aporta una fuerza nueva para que la película siga su proceso natural.'
            />
            </p>
          <p className={style.parrafo}>
          <FormattedMessage
              id='k?.parrafo4'
              defaultMessage='Asimismo, los NFT&#39;s abrirán las puertas del mundo del cine a sus holders. La posesión de un NFT brinda beneficios como material inédito, acceso exclusivo a los estudios, la participación en los proyectos de ficción actuando como extras, así como entradas de cine, encuentros con los y las  artistas, pases para premieres, etc.'
            />
            </p>
          <h4 className={style.titulo}><FormattedMessage
            id='k?.titulo4'
            defaultMessage='¿ Qué caracteriza nuestros NFT ?'
          />
          </h4>
          <p className={style.parrafo}>
          <FormattedMessage
              id='k?.parrafo5'
              defaultMessage='Todos los NFT de los proyectos en nuestra plataforma tienen una característica común, siempre los personajes parten del mismo cubo de ahí el nombre de Kubics. De esta manera nos aseguramos la propiedad intelectual de estos NFT y se eviten vacíos legales que pueden perjudicar a la propia película.'
            />
            </p>
          <Collage />
          <h4 className={style.titulo}><FormattedMessage
            id='k?.titulo5'
            defaultMessage='¿Qué aporta Kubics?'
          />
          </h4>
          <p className={style.parrafo}>
          <FormattedMessage
              id='k?.parrafo6'
              defaultMessage='Una película no es el trabajo de una única persona, no sólo se trata de tener dinero y hacerla, es un trabajo en equipo que parte desde el guión,  la dirección, las productoras, agentes de ventas, distribuidoras y exhibidoras. Todos estos equipos  trabajan para dar forma a un proyecto que se pueda colocar en el mercado, unas veces con más éxito otras con menos. Lo que está claro es que sin estos elementos una película fácilmente puede terminar en un cajón sin poderse distribuir y por tanto sin llegar al público. Es todo un engranaje. Desde Kubics lo que conseguiremos es garantizar que todo este engranaje funcione.'
            />
            </p>
          <p className={style.parrafo}>
          <FormattedMessage
              id='k?.parrafo7'
              defaultMessage='Por ello los proyectos que presentamos en nuestra plataforma deben tener estos elementos y sobre todo el interés de una distribuidora o agente de ventas hacia el proyecto en cuestión, lo que va hacer que entre las partes  podamos darle un valor a los NFT&#39;s de nuestros holders cuando esta película llegue al público.
            ¿Cuánto  valdría ahora el NFT de la primera película de Pixar, o de una película de Tarantino, Godard o Almodóvar?'
            />
          </p>
          <h4 className={style.titulo}><FormattedMessage
            id='k?.titulo6'
            defaultMessage='¿ Cuál es el valor de un NFT ?'
          />
          </h4>
          <p className={style.parrafo}>
          <FormattedMessage
              id='k?.parrafo8'
              defaultMessage='Los NFT de Kubics no son sólo una imagen, son parte de una producción de cine.
            El mundo está cambiando y el ecosistema blockchain abre las puertas a una forma nueva de financiar proyectos, aplicaciones, videojuegos, multiversos y en este caso incluso cine.
            Todos consumimos cine, ya sea en las salas o en las pantallas de nuestras casas, pero hasta ahora era muy complicado formar parte de ese mundo. Con los NFT de cada película el holder pasa a formar parte de un universo nuevo dentro de la blockchain y del mundo físico.'
            />
          </p>
          <p className={style.parrafo}>
          <FormattedMessage
              id='k?.parrafo9'
              defaultMessage='Muchos de las personas que coleccionan NFT&#39;s entienden su valor como piezas únicas de una colección, piezas que por diferentes razones nos cautivan y deseamos poseerlas. Cada vez más el valor de estos NFT va más allá de la imágen en sí misma, realmente  es lo que hay detrás lo que le da su valor.  En este caso  detrás de cada NFT  hay un proyecto consolidado, lo cual aumenta la posibilidad de que se revalorice tras el éxito de la película.'
            />
            </p>



        </div>
      </div>
    </>
  );
}

export default WhayIsKubics;
