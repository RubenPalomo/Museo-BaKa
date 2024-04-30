import React from "react";
import Header from "../components/Header/Header";
import Wallpaper from "../components/Wallpaper/Walpaper";

export default function HistoryPage() {
  return (
    <main
      className="flex flex-col w-full h-full min-h-screen items-center bg-white"
      data-testid="pathologies"
    >
      <Header currentPage="Historia" />
      <Wallpaper />
      <div className="flex flex-col m-10">
        <div className="mb-5">
          <h1 className="font-bold text-xl sm:text-3xl text-center">
            Nuestra historia
          </h1>
          <p className="mt-2">
            En el corazón de Madrid, en un elegante edificio restaurado que
            combina la arquitectura clásica con toques modernos, se encuentra el
            Museo BaKa. Este museo único fue concebido por la visionaria
            historiadora Helena Martínez, quien soñaba con crear un espacio que
            trajera el antiguo Egipto al siglo XXI, fusionando el legado
            histórico con la creatividad contemporánea.
          </p>
          <p className="mt-2">
            La historia del museo comienza cuando Helena Martínez, una
            apasionada estudiosa del arte egipcio, se embarca en un viaje de
            investigación a Egipto. Allí, queda fascinada por la riqueza
            cultural y la misteriosa belleza de las antigüedades egipcias.
            Decidida a compartir esta fascinación con el mundo, regresa a Madrid
            con la visión de crear un museo que presente el arte egipcio de una
            manera fresca y contemporánea.
          </p>
          <p className="mt-2">
            Con el apoyo de artistas locales e internacionales, así como de
            patrocinadores entusiastas, Helena Martínez transforma en el año
            1998, un antiguo edificio en el vibrante espacio que es hoy el Museo
            BaKa. Las salas de exposiciones están diseñadas de manera
            innovadora, combinando elementos arquitectónicos modernos con toques
            inspirados en la estética egipcia.
          </p>
          <p className="mt-2">
            La colección del museo es una mezcla ecléctica de artefactos
            antiguos y obras de arte contemporáneo inspiradas en el antiguo
            Egipto. Los visitantes pueden maravillarse con las esculturas
            clásicas de los faraones al tiempo que exploran las instalaciones de
            arte multimedia que reinterpretan temas egipcios a través de la
            lente de la era digital.
          </p>
          <p className="mt-2">
            El museo no solo es un espacio para contemplar obras de arte, sino
            también un lugar de encuentro cultural donde se celebran charlas y
            talleres que exploran la influencia del arte egipcio en la sociedad
            contemporánea.
          </p>
          <p className="mt-2">
            Bajo la dirección de Helena Martínez, el museo se ha convertido en
            un punto de referencia en la escena artística de Madrid, desafiando
            las expectativas y enriqueciendo el diálogo cultural. Su visión
            audaz y su pasión por el arte egipcio han creado un legado duradero
            que continúa inspirando a generaciones de artistas y amantes del
            arte en todo el mundo.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-xl sm:text-3xl text-center">
            ¿Por qué BaKa?
          </h1>
          <p className="mt-2">
            Para entender este concepto, es necesario comprender las creencias
            espirituales de la civilización de Egipto. En la antigua concepción
            egipcia, la naturaleza del ser humano era compleja y se componía de
            una serie de elementos, tanto tangibles como intangibles. Estos
            componentes eran vistos de manera diferente a nuestra comprensión
            espiritual contemporánea, lo que hace difícil encontrar términos
            exactos para describirlos.
          </p>
          <p className="mt-2">
            Según la creencia egipcia, el espíritu humano estaba formado por
            varios elementos clave, entre los que se destacaban el{" "}
            <span className="italic">ib</span>, el
            <span className="italic">ka</span>, el{" "}
            <span className="italic">ba</span>, el{" "}
            <span className="italic">aj</span>, el{" "}
            <span className="italic">ren</span> y el{" "}
            <span className="italic">sheut</span>. Además de estos aspectos, se
            consideraba al cuerpo físico, conocido como{" "}
            <span className="italic">ja</span> o{" "}
            <span className="italic">jat</span>, como parte integral del ser
            humano.
          </p>
          <p className="mt-2">
            A nosotros nos interesa la esencia del{" "}
            <span className="italic">ka</span> y el{" "}
            <span className="italic">ba</span>. El{" "}
            <span className="italic">ka</span> se podría concebir como la fuerza
            vital, lo que nos mantiene vivos y al morir es lo que se conoce como
            “el último aliento”. El <span className="italic">ba</span> es lo más
            cercano al concepto occidental del alma, cuando el hombre muere,
            esta debe permanecer en él. Sin embargo, el{" "}
            <span className="italic">ba</span>, tras la muerte, se desvincula
            del cuerpo físico, por lo que se quedará sobrevolando alrededor,
            hasta que finalmente pueda encontrarlo y obtener así la vida eterna
            en el más allá.
          </p>
          <p className="mt-2">
            La unión de estos dos elementos es necesaria para este proceso. No
            sabemos si realmente existe este más allá del que se habla, pero lo
            que sí sabemos es que efectivamente, gracias a todas las obras
            artísticas que nos han llegado hasta día de hoy, hace que, de cierta
            forma, sí hayan conseguido adquirir la eternidad, y así lo queremos
            transmitir en este nuestro museo.
          </p>
        </div>
      </div>
    </main>
  );
}
