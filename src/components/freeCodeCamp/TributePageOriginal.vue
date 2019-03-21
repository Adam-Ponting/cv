<template>
  <div>
    <!-- 
      
     -->
    <div id="main">
      <header id="title">
        <h1>Ghenghis Khan</h1>
        <span>
          Mongolian warrior and ruler Genghis Khan created the largest empire in
          the world, the Mongol Empire, by destroying individual tribes in
          Northeast Asia.
        </span>
      </header>

      <div id="img-div">
        <img
          src="https://live-admin-vjv1.tigerbay.co.uk/resize.ashx?f=Giant%20Genghis%20Khan%20Statue.jpg&w=0&h=0"
          id="image"
          alt="Ghenghis khan statue"
        />
        <p id="img-caption">
          Genghis Khan Equestrian Statue, part of the Genghis Khan Statue
          Complex on the bank of the Tuul River at Tsonjin Boldog (54 km (33.55
          mi) east of the Mongolian capital Ulaanbaatar)
        </p>
      </div>

      <div id="tribute-info">
        <h2>Synopsis</h2>
        <p>
          Genghis Khan was born "Temujin" in Mongolia around 1162. He married at
          age 16, but had many wives during his lifetime. At 20, he began
          building a large army with the intent to destroy individual tribes in
          Northeast Asia and unite them under his rule. He was successful; the
          Mongol Empire was the largest empire in the world before the British
          Empire, and lasted well after his own death in 1227.
        </p>

        <a @click="viewMore = !viewMore" v-show="!viewMore" class="toggle"
          >view more...</a
        >
        <a @click="viewMore = !viewMore" v-show="viewMore" class="toggle"
          >view less</a
        >
        <transition name="fade">
          <div v-show="viewMore">
            <h2>Early Life</h2>
            <p>
              Born in north central Mongolia around 1162, Genghis Khan was
              originally named "Temujin" after a Tatar chieftain that his
              father, Yesukhei, had captured. Young Temujin was a member of the
              Borjigin tribe and a descendant of Khabul Khan, who briefly united
              Mongols against the Jin (Chin) Dynasty of northern China in the
              early 1100s. According to the "Secret History of the Mongols" (a
              contemporary account of Mongol history), Temujin was born with a
              blood clot in his hand, a sign in Mongol folklore that he was
              destined to become a leader. His mother, Hoelun, taught him the
              grim reality of living in turbulent Mongol tribal society and the
              need for alliances.
            </p>

            <p>
              When Temujin was 9, his father took him to live with the family of
              his future bride, Borte. On the return trip home, Yesukhei
              encountered members of the rival Tatar tribe, who invited him to a
              conciliatory meal, where he was poisoned for past transgressions
              against the Tatars. Upon hearing of his father's death, Temujin
              returned home to claim his position as clan chief. However, the
              clan refused to recognize the young boy's leadership and
              ostracized his family of younger brothers and half-brothers to
              near-refugee status. The pressure on the family was great, and in
              a dispute over the spoils of a hunting expedition, Temujin
              quarreled with and killed his half-brother, Bekhter, confirming
              his position as head of the family.
            </p>

            <p>
              At 16, Temujin married Borte, cementing the alliance between the
              Konkirat tribe and his own. Soon after, Borte was kidnapped by the
              rival Merkit tribe and given to a chieftain as a wife. Temujin was
              able to rescue her, and soon after, she gave birth to her first
              son, Jochi. Though Borte's captivity with the Konkirat tribe cast
              doubt on Jochi's birth, Temujin accepted him as his own. With
              Borte, Temujin had four sons and many other children with other
              wives, as was Mongolian custom. However, only his male children
              with Borte qualified for succession in the family.
            </p>

            <h2>The 'Universal Ruler'</h2>
            <p>
              When Temujin was about 20, he was captured in a raid by former
              family allies, the Taichi'uts, and temporarily enslaved. He
              escaped with the help of a sympathetic captor, and joined his
              brothers and several other clansmen to form a fighting unit.
              Temujin began his slow ascent to power by building a large army of
              more than 20,000 men. He set out to destroy traditional divisions
              among the various tribes and unite the Mongols under his rule.
            </p>

            <p>
              Through a combination of outstanding military tactics and
              merciless brutality, Temujin avenged his father's murder by
              decimating the Tatar army, and ordered the killing of every Tatar
              male who was more than approximately 3 feet tall (taller than the
              linchpin, or axle pin, of a wagon wheel). Temujin's Mongols then
              defeated the Taichi'ut using a series of massive cavalry attacks,
              including having all of the Taichi'ut chiefs boiled alive. By
              1206, Temujin had also defeated the powerful Naiman tribe, thus
              giving him control of central and eastern Mongolia.
            </p>

            <p>
              The early success of the Mongol army owed much to the brilliant
              military tactics of Genghis Khan, as well as his understanding of
              his enemies' motivations. He employed an extensive spy network and
              was quick to adopt new technologies from his enemies. The
              well-trained Mongol army of 80,000 fighters coordinated their
              advance with a sophisticated signaling system of smoke and burning
              torches. Large drums sounded commands to charge, and further
              orders were conveyed with flag signals. Every soldier was fully
              equipped with a bow, arrows, a shield, a dagger and a lasso. He
              also carried large saddlebags for food, tools and spare clothes.
              The saddlebag was waterproof and could be inflated to serve as a
              life preserver when crossing deep and swift-moving rivers.
              Cavalrymen carried a small sword, javelins, body armor, a
              battle-ax or mace, and a lance with a hook to pull enemies off of
              their horses. The Mongols were devastating in their attacks.
              Because they could maneuver a galloping horse using only their
              legs, their hands were free to shoot arrows. The entire army was
              followed by a well-organized supply system of oxcarts carrying
              food for soldiers and beasts alike, as well as military equipment,
              shamans for spiritual and medical aid, and officials to catalog
              the booty.
            </p>

            <p>
              Following the victories over the rival Mongol tribes, other tribal
              leaders agreed to peace and bestowed on Temujin the title of
              "Genghis Khan," which means "universal ruler." The title carried
              not only political importance, but also spiritual significance.
              The leading shaman declared Genghis Khan the representative of
              Mongke Koko Tengri (the "Eternal Blue Sky"), the supreme god of
              the Mongols. With this declaration of divine status, it was
              accepted that his destiny was to rule the world. Religious
              tolerance was practiced in the Mongol Empire, but to defy the
              Great Khan was equal to defying the will of God. It was with such
              religious fervor that Genghis Khan is supposed to have said to one
              of his enemies, "I am the flail of God. If you had not committed
              great sins, God would not have sent a punishment like me upon
              you."
            </p>

            <h2>Major Conquests</h2>
            <p>
              Genghis Khan wasted no time in capitalizing on his divine stature.
              While spiritual inspiration motivated his armies, the Mongols were
              probably driven as much by environmental circumstances. Food and
              resources were becoming scarce as the population grew. In 1207, he
              led his armies against the kingdom of Xi Xia and, after two years,
              forced it to surrender. In 1211, Genghis Khan's armies struck the
              Jin Dynasty in northern China, lured not by the great cities'
              artistic and scientific wonders, but rather the seemingly endless
              rice fields and easy pickings of wealth.
            </p>

            <p>
              Although the campaign against the Jin Dynasty lasted nearly 20
              years, Genghis Khan's armies were also active in the west against
              border empires and the Muslim world. Initially, Genghis Khan used
              diplomacy to establish trade relations with the Khwarizm Dynasty,
              a Turkish-dominated empire that included Turkestan, Persia, and
              Afghanistan. But the Mongol diplomatic mission was attacked by the
              governor of Otrar, who possibly believed the caravan was a cover
              for a spy mission. When Genghis Khan heard of this affront, he
              demanded the governor be extradited to him and sent a diplomat to
              retrieve him. Shah Muhammad, the leader of the Khwarizm Dynasty,
              not only refused the demand, but in defiance sent back the head of
              the Mongol diplomat.
            </p>

            <p>
              This act released a fury that would sweep through central Asia and
              into eastern Europe. In 1219, Genghis Khan personally took control
              of planning and executing a three-prong attack of 200,000 Mongol
              soldiers against the Khwarizm Dynasty. The Mongols swept through
              every city's fortifications with unstoppable savagery. Those who
              weren't immediately slaughtered were driven in front of the Mongol
              army, serving as human shields when the Mongols took the next
              city. No living thing was spared, including small domestic animals
              and livestock. Skulls of men, women, and children were piled in
              large, pyramidal mounds. City after city was brought to its knees,
              and eventually the Shah Muhammad and later his son were captured
              and killed, bringing an end to the Khwarizm Dynasty in 1221.
            </p>

            <p>
              Scholars describe the period after the Khwarizm campaign as the
              Pax Mongolica. In time, the conquests of Genghis Khan connected
              the major trade centers of China and Europe. The empire was
              governed by a legal code known as Yassa. Developed by Genghis
              Khan, the code was based on Mongol common law but contained edicts
              that prohibited blood feuds, adultery, theft and bearing false
              witness. Also included were laws that reflected Mongol respect for
              the environment such as forbidding bathing in rivers and streams
              and orders for any soldier following another to pick up anything
              that the first soldier dropped. Infraction of any of these laws
              was usually punishable by death. Advancement within military and
              government ranks was not based on traditional lines of heredity or
              ethnicity, but on merit. There were tax exemptions for religious
              and some professional leaders, as well as a degree of religious
              tolerance that reflected the long-held Mongol tradition of
              religion as a personal conviction not subject to law or
              interference. This tradition had practical applications as there
              were so many different religious groups in the empire, it would
              have been an extra burden to force a single religion on them.
            </p>

            <p>
              With the annihilation of the Khwarizm Dynasty, Genghis Khan once
              again turned his attention east to China. The Tanguts of Xi Xia
              had defied his orders to contribute troops to the Khwarizm
              campaign and were in open revolt. In a string of victories against
              Tangut cities, Genghis Khan defeated enemy armies and sacked the
              capital of Ning Hia. Soon one Tangut official surrendered after
              another, and the resistance ended. Genghis Khan hadn't quite
              extracted all the revenge he wanted for the Tangut betrayal,
              however, and ordered the execution of the imperial family, thus
              ending the Tangut lineage.
            </p>

            <h2>Genghis Khan's Death</h2>
            <p>
              Genghis Khan died in 1227, soon after the submission of the Xi
              Xia. The exact cause of his death is unknown. Some historians
              maintain that he fell off a horse while on a hunt, and died of
              fatigue and injuries. Others contend that he died of respiratory
              disease. Genghis Khan was buried without markings, according to
              the customs of his tribe, somewhere near his birthplace—close to
              the Onon River and the Khentii Mountains in northern Mongolia.
              According to legend, the funeral escort killed anyone and anything
              they encountered to conceal the location of the burial site, and a
              river was diverted over Genghis Khan's grave to make it impossible
              to find.
            </p>

            <p>
              Before his death, Genghis Khan bestowed supreme leadership to his
              son Ogedei, who controlled most of eastern Asia, including China.
              The rest of the empire was divided among his other sons: Chagatai
              took over central Asia and northern Iran; Tolui, being the
              youngest, received a small territory near the Mongol homeland; and
              Jochi (who was killed before Genghis Khan's death). Jochi and his
              son, Batu, took control of modern Russia and formed the Golden
              Horde. The empire's expansion continued and reached its peak under
              Ogedei Khan's leadership. Mongol armies eventually invaded Persia,
              the Song Dynasty in southern China, and the Balkans. Just when the
              Mongol armies had reached the gates of Vienna, Austria, leading
              commander Batu got word of the Great Khan Ogedei's death and was
              called back to Mongolia. Subsequently, the campaign lost momentum,
              marking the Mongol's farthest invasion into Europe.
            </p>

            <p>
              Among the many descendents of Genghis Khan is Kublai Khan, who was
              the son of Tolui, Genghis Khan's youngest son. At a young age,
              Kublai had a strong interest in Chinese civilization and,
              throughout his life, did much to incorporate Chinese customs and
              culture into Mongol rule. Kublai rose to prominence in 1251, when
              his eldest brother, Mongke, became Khan of the Mongol Empire and
              placed him as governor of the southern territories. Kublai
              distinguished himself by increasing agricultural production and
              expanding Mongol territory. After Mongke's death, Kublai and his
              other brother, Arik Boke, fought for control of the empire. After
              three years of intertribal warfare, Kublai was victorious, and he
              was made Great Khan and emperor of the Yuan Dynasty of China.
            </p>
          </div>
        </transition>
      </div>

      <p>
        To read more on Ghenghis Khan visit Wikipedia
        <a
          href="https://en.wikipedia.org/wiki/Genghis_Khan"
          id="tribute-link"
          target="_blank"
          >here.</a
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  //name: "TributePage",
  data() {
    return {
      viewMore: false,
      showing: true
    };
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/css/colorscheme.scss";

#tribute-info {
  padding: 20px 100px;
  font-size: 20px;
  line-height: 1.5;
}
#tribute-info > p::first-letter {
  color: red;
  font-size: 40px;
  line-height: 0.75;
}
#main {
  background-color: $bgclear;
  color: black;
  text-align: center;
}
#title {
  font-weight: bold;
}
#title h1 {
  padding: 1em;
  margin: 0 auto;
}
#title span {
  font-size: 20px;
  font-weight: bold;
  padding: 0.5em 2em;
}
header {
  padding: 1em 2em;
}
#img-div {
  padding: 0 0 10px;
  width: 100%;
  border: 0 10px solid white;
  background: white;
  box-sizing: border-box;
}

#img-div > img {
  width: 100%;
  margin: 0 auto;
}
#img-caption {
  padding: 0 50px;
}
div .toggle {
  padding: 0.6em;
  cursor: pointer;
  border: 1px solid burlywood;
  border-radius: 45px;
}
div .toggle:hover {
  background: pink;
  padding: 0.6em;
  cursor: pointer;
  border: 1px solid burlywood;
  border-radius: 45px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1s;
}
</style>
