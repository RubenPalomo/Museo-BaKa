"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ColectionElement from "./components/ColectionElement/ColectionElement";
import Header from "../components/Header/Header";
import Wallpaper from "../components/Wallpaper/Walpaper";

export default function ColectionsPage() {
  const router = useRouter();
  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = (e: any) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: any) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX;

    if (deltaX > 50) router.push("/");
    else if (deltaX < -50) router.push("/exposiciones");

    setTouchStartX(0);
  };

  return (
    <main
      className="flex w-full h-full min-h-screen flex-col items-center bg-white"
      data-testid="about-me"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Header currentPage="Colecciones" />
      <Wallpaper />
      <h1 className="text-2xl font-bold mx-auto my-5 w-[80vw]">
        Nuestras obras
      </h1>
      <div className="flex flex-wrap justify-center">
        <h2 className="text-xl font-bold text-center w-full mt-4">Estatuas</h2>
        <ColectionElement
          title="Estatuilla de mujer desnuda, c. 4.000 al 3.500 a.C, Nejen"
          imagePath="img/museum-images/Picture1.jpg"
          description="Estatuillas de un ídolo en marfil. Se trata de la figurilla de una mujer muy sintetizada y con los órganos sexuales muy marcados, tanto el pubis como los pechos. Su motivo se debe a que tenía función como elemento en ritos de fertilidad. Los ojos son muy grandes, realizados con lapislázuli, parecidos a los que vemos en el arte sumerio, lo que nos indica un contacto entre civilizaciones. Utilizan el rayado y punteado para marcar ciertas partes del cuerpo, de forma geométrica."
        />
        <ColectionElement
          title="Estatuilla de Keops, c. 2.590 a.C, Guiza"
          imagePath="img/museum-images/Picture2.jpg"
          description="Se trata de una pequeña escultura, que mide unos 7 centímetros. Está realizada en marfil, material muy frágil y poco utilizado en este período. Porta la corona roja, lo que nos indica que es faraón del Bajo Imperio. La mano derecha que va al pecho porta el flagelo, símbolo faraónico. Sus rasgos son maduros, pero aparece con una expresión solemne e idealizada."
        />
        <ColectionElement
          title="Estatua de Kefrén, c. 2.550 a.C, Guiza"
          imagePath="img/museum-images/Picture3.jpg"
          description="Se trata de una de las 23 estatuas encontradas en el conjunto de Guiza. Supone el culmen de las estatuas egipcias. Está realizada en diorita. Aparece joven, con buena anatomía, ligera sonrisa y rasgos faciales finos, lo que nos indica una idealización de la representación del faraón. Lo más destacable es el halcón que se encuentra en su cuello, en representación al dios Horus. En el costado del trono encontramos una inscripción, representando el Sema-Tauy, es decir, la flor de papiro y loto, en representación a la unión de los dos reinos."
        />
        <ColectionElement
          title="Estatuas de Rahotep y Nefret, c. 2.610 a.C, Guiza"
          imagePath="img/museum-images/Picture4.jpg"
          description="Grupo escultórico de una pareja, que nos permite apreciar las diferencias en los cánones estéticos de la época. Rahotep aparece semidesnudo, tiene piel oscura, su cabeza está rapada y tiene bigote. Nefret viste un largo vestido blanco, su piel es pálida y su cabeza probablemente también estaría rapada, debido a las plagas de piojos, pero lleva una peluca adornada con una diadema. Se cree que Rahotep era un príncipe o sacerdote."
        />
        <h2 className="text-xl font-bold text-center w-full mt-4">Bajorrelieve</h2>
        <ColectionElement
          title="El enano Seneb y su Familia, c. 2.520 a. C, Guiza"
          imagePath="img/museum-images/Picture5.jpg"
          description="Grupo escultórico cortesano que nos muestra al enano Seneb sentado sobre un pilastro, junto a su mujer. En los pies observamos a sus hijos, un niño y una niña. Apreciamos de nuevo el contraste en las tonalidades de la piel. Cierto es, que, pese a su condición, Seneb disfrutó de una calidad de vida gracias al cargo de funcionario que ostentaba."
        />
        <ColectionElement
          title="La Paleta de Menes Narmer, c. 3.100 al 2.686 a.C, Nejen"
          imagePath="img/museum-images/Picture6.jpg"
          description="Se trata de una placa de pizarra tallada. Observamos al faraón en posición jerárquica (al aparecer en mayor escala), pisando las fuerzas del caos (haciendo referencia a las ciudades vencidas) y sometiendo a un extranjero. A la izquierda observamos al portasandalias, uno de los funcionarios del reino y a la izquierda a Horus en forma de halcón. En la parte superior se ven dos figuras antropomorfas con cornamenta de vaca. En la parte posterior, encontramos de la misma forma estas figuras y en el centro, de nuevo al faraón. En el extremo de la derecha vemos a los enemigos decapitados y como escena central, los serpopards, con los cuellos entrelazados, simbolizando la unión entre Alto y Bajo Egipto. No se realizó con un fin funerario, sino para dejar constancia de su reinado."
        />
        <ColectionElement
          title="Estela de Iunu, c. 2.590 a.C"
          imagePath="img/museum-images/Picture7.jpg"
          description="Representa la escena de la “mesa de las ofrendas”, una mesa llena de alimentos para alimentar al ka y revivificarlo, pues estos alimentos cobrarán vida en el más allá."
        />
        <h2 className="text-xl font-bold text-center w-full mt-4">Papiros</h2>
        <ColectionElement
          title="Papiro de Hunefer, c. 1.310 al 1.275 a.C"
          imagePath="img/museum-images/Picture8.jpg"
          description="Este es uno de los textos funerarios más conocidos del antiguo Egipto. Escrito en papiro, el Libro de los Muertos contiene una serie de hechizos, oraciones y textos que se colocaban junto al difunto para ayudarlo en su viaje al más allá y garantizar su vida eterna."
        />
        <ColectionElement
          title="Papiro de Ani, c. 1.300 a.C"
          imagePath="img/museum-images/Picture9.jpg"
          description="Perteneciente a un escriba con este nombre, contiene una serie de textos e ilustraciones que detallan el viaje del difunto por el inframundo y su juicio ante los dioses."
        />
        <ColectionElement
          title="Papiro de Turín, c. 1.150 a.C"
          imagePath="img/museum-images/Picture10.jpg"
          description="Se trata de un papiro compuesto por doce viñetas de carácter erótico, con diferentes escenas sexuales e inscripciones jocosas e indecentes."
        />
        <h2 className="text-xl font-bold text-center w-full mt-4">Joyas</h2>
        <ColectionElement
          title="Pectoral de la Princesa Sithathoryunet, c. 1.880 a.C., Deir el-Bahari"
          imagePath="img/museum-images/Picture11.jpg"
          description="Pectoral de oro, decorado con incrustaciones de lapislázuli, turquesa, cornalina y otras piedras preciosas, representando escenas religiosas y simbólicas. Perteneció a la Princesa Mereret, hermana del faraón Amenofis III."
        />
        <ColectionElement
          title="Brazalete de la Reina Ahhotep, c. 1570 a.C., Luxor"
          imagePath="img/museum-images/Picture12.jpg"
          description="Este brazalete de oro y lapislázuli fue encontrado en la tumba de la reina Ahhotep en el Valle de los Reyes. Es una pieza impresionante que muestra la habilidad artesanal y el gusto refinado de la época, con intrincados diseños geométricos y figuras simbólicas."
        />
        <ColectionElement
          title="Máscara funeraria de Psusennes I, c. 1.047 al 1.001 a.C., Tanis"
          imagePath="img/museum-images/Picture13.jpg"
          description="Descubierta en la tumba del faraón Psusennes I en Tanis, esta máscara está hecha de oro y plata y es una obra maestra de la orfebrería egipcia. Se caracteriza por su intrincado diseño y su representación detallada del rostro del faraón."
        />
      </div>
    </main>
  );
}
