import * as React from "react";
import { Route, Switch, Redirect /*, withRouter */ } from "react-router";
// import LinearProgress from "@material-ui/core/LinearProgress";
// import Loadable from "react-loadable";

import "./styles.css";

import Links from "./pages/links/index.js";
import Aristotwist from "./pages/aristotwist/index.js";
import Boutique from "./pages/business_boutique/index.js";
import Modern from "./pages/modern-fashion-style/index.js";
import Concept from "./pages/conceptualfashion/index.js";
import ConceptNew from "./pages/cf/index";
import History from "./pages/fashion-history/index.js";
import Media from "./pages/fashion-media-digital/index.js";
import Merchandisign from "./pages/fashion-visual-merchandising/index.js";
import Photo from "./pages/foto-course/index.js";
import ImageStyle from "./pages/base-image-style/index";
import Imagemaker from "./pages/imagemaker-second-degree/index";
import ImagemakerLanding from "./pages/i2v/index";
import Interior from "./pages/interior-design/index.js";
import Makeup from "./pages/makeup/index.js";
import MakeUp from "./pages/make-up/index";
import Text from "./pages/mastery-of-writing-text/index.js";
import Political from "./pages/political-style/index.js";
import PoliticalOld from "./pages/political-style-old/index.js";
import Practice from "./pages/practice-image-consulting/index.js";
import Secretary from "./pages/press-secretary/index.js";
import Psychology from "./pages/style-psychology/index.js";
import InteriorProfi from "./pages/living-interior-design-and-decoration/index.js";
import Vitrinism from "./pages/visual-merchandising-and-showcases-design/index.js";
import Profashion from "./pages/profashion/index.js";
import ProfashionTest from "./pages/profashion-test/index.js";
import ProfashionSpecialOffer from "./pages/profashion-special-offer/index";
import About from "./pages/about/index";
import Teachers from "./pages/teachers/index";
import Graduates from "./pages/graduates/index";
import Gorskyh from "./pages/teachers/gorskyh";
import Migranov from "./pages/teachers/migranov";
import Fomina from "./pages/teachers/fomina";
import Kostarnova from "./pages/teachers/kostarnova";
import Kononets from "./pages/teachers/kononets";
import Varakina from "./pages/teachers/varakina";
import Bahova from "./pages/teachers/bahova";
import Bonetskaya from "./pages/teachers/bonetskaya";
import Britsova from "./pages/teachers/britsova";
import Kachalina from "./pages/teachers/kachalina";
import Shved from "./pages/teachers/shved";
import Rodina from "./pages/teachers/rodina";
import Cherednichenko from "./pages/teachers/cherednichenko";
import Iskhakova from "./pages/teachers/iskhakova";
import Thurman from "./pages/teachers/thurman";
import Zhilova from "./pages/teachers/zhilova";
import Troepolskaya from "./pages/teachers/troepolskaya";
import Antonova from "./pages/teachers/antonova";
import Mikhailenko from "./pages/teachers/mikhailenko";
import Ahmetova from "./pages/teachers/yana-ahmetova";
import Sargsyan from "./pages/teachers/sargsyan";
import Olyushina from "./pages/teachers/oljga-olyushina";
import Info from "./pages/info/index";
import Rules from "./pages/info/rules";
import Security from "./pages/info/politic";
import Agree from "./pages/info/agree";
import Consulting from "./pages/consulting/index";
import ProfessiyaMyslitel from "./pages/blog/professiya-myslitel";
import DizaynerskieBrendy from "./pages/blog/dizaynerskie-brendy";
import ModaModeliery from "./pages/blog/moda-i-modeliery";
import HistoriHomesFashion from "./pages/blog/istoriya-domov-mody";
import Glamur from "./pages/blog/glamur";
import ModaMoral from "./pages/blog/moda-i-moral";
import Dior from "./pages/blog/dior";
import Articles from "./pages/articles/index";
import Irony from "./pages/blog/irony";
import Meshok from "./pages/blog/meshok";
import Broshj from "./pages/blog/broshj";
import Zverj from "./pages/blog/zverj";
import Soloma from "./pages/blog/soloma";
import Vremya from "./pages/blog/vremya";
import Kushatj from "./pages/blog/kushatj";
import More from "./pages/blog/more";
import Individ from "./pages/blog/individ";
import MaisonMargiela from "./pages/blog/maison-margiela";
import Childrens from "./pages/blog/childrens";
import Contacts from "./pages/contacts/index";
import Shedule from "./pages/shedule/index";
import Training from "./pages/training/index";
import ProfiJournalist from "./pages/profi-fashion-journalist/index";
import Root from "./pages/root/index";
import Management from "./pages/management-is-in-fashion/index";
import SelfStyle from "./pages/self-style/index";
import Speccourses from "./pages/special-courses/index";
import Order from "./pages/order/index";
import Catalog from "./pages/catalog/index";
import Club from "./pages/club/index";
import Elearning from "./pages/elearning/index";
import FamilyLook from "./pages/blog/family-look";
import Dress from "./pages/blog/dress";
import SofjyaZozulya from "./pages/authors/sofjya-zozulya";
import Morgun from "./pages/graduates/alexandra-morgun";
import Minkina from "./pages/graduates/alena_minkina";
import Glushkova from "./pages/graduates/anastasiya-glushkova";
import Marchuk from "./pages/graduates/anna-marchuk";
import Nazimova from "./pages/graduates/anna-nazimova";
import Nalibaeva from "./pages/graduates/guljvira-nalibaeva";
import Osorova from "./pages/graduates/guljsara-osorova";
import Vanjshina from "./pages/graduates/ekaterina-vanjshina";
import Varlakova from "./pages/graduates/irina-varlakova";
import Manicheva from "./pages/graduates/larisa-manicheva";
import Style4Make from "./pages/style4make/index";
import StyleEvolution from "./pages/styleevolution/index";
import StyleEvolutionFut from "./pages/styleevolution/futura";
import StyleEvolutionF from "./pages/styleevolution/forum";
import StyleEvolutionG from "./pages/styleevolution/garamond";
import StyleEvolutionI from "./pages/styleevolution/istok-web";
import ImagemakerTest from "./pages/i2v-test/index";
import RootTest from "./pages/root-test/index";
import Styleschool from "./pages/schools/styleschool";
import FashionSchool from "./pages/schools/fashionschool";
import SchoolDesign from "./pages/schools/schoolofdesign";
import ArtSchool from "./pages/schools/artschool";
import SchoolManagement from "./pages/schools/schoolofmanagement";
import Information from "./pages/information-about-educational-organization/index";
import Dokumenty from "./pages/information-about-educational-organization/dokumenty";
import FinansHoz from "./pages/information-about-educational-organization/finansovo-hozyaystvennaya-deyateljnostj";
import MatTechOsnaschenie from "./pages/information-about-educational-organization/materialjno-tehnicheskoe-osnaschenie";
import Programmy from "./pages/information-about-educational-organization/obrazovateljnye-programmy";
import Standarty from "./pages/information-about-educational-organization/obrazovateljnye-standarty";
import Svedeniya from "./pages/information-about-educational-organization/osnovnye-svedeniya";
import PlatnyeUslugi from "./pages/information-about-educational-organization/platnye-obrazovateljnye-uslugi";
import Rukovodstvo from "./pages/information-about-educational-organization/rukovodstvo-i-pedagogicheskiy-sostav";
import Stipendii from "./pages/information-about-educational-organization/stipendii";
import Struktura from "./pages/information-about-educational-organization/struktura-i-organy-upravleniya";
import Vakant from "./pages/information-about-educational-organization/vakantnye-mesta-dlya-priema";
import Crisis from "./pages/crisis-management-fashion-butik/index";
import FashionStyling from "./pages/fashion-styling/index";
import MarketingForStylists from "./pages/marketing-for-stylists/index";
import MarketingForStylistsLanding from "./pages/marketing-for-stylists-landing/index";
import Postmodern from "./pages/from-classic-to-postmodern/index";
import SocConcept from "./pages/concepts-of-fashion/index";
import Motivation from "./pages/motivation-of-staff/index";
import Denim from "./pages/master-classes-in-the-boutique-garderob/denim-fashion-trends";
import TrendsSeason from "./pages/master-classes-in-the-boutique-garderob/current-season-trends";
import Brands from "./pages/master-classes-in-the-boutique-garderob/premium-brands";
import Capsule from "./pages/master-classes-in-the-boutique-garderob/puting-the-capsule-on-vacation";
import Franchising from "./pages/fashion-franchising/index";
import Typology from "./pages/typology-of-architectural-forms/index";
import HistoryInterior from "./pages/history-of-styles-in-interior/index";
import HowFranchise from "./pages/how-to-choose-a-franchise/index";
import HowCreateFranchise from "./pages/how-to-create-a-franchise/index";
import PsychologyStyle from "./pages/psychology-of-style/index";
import PsSt from "./pages/psst/index.js";
import Lamonova from "./pages/teachers/lamonova";
import Hlestova from "./pages/teachers/hlestova";
import Archive from "./pages/archiv/index";
import Rotar from "./pages/teachers/rotar";
import InteriorDecor from "./pages/interiordecor";
import InternationalCommunications from "./pages/international-communications/index";
import RootDesign from "./pages/root-design/index";
import RootDesign2 from "./pages/root-design2/index";
import RootDesign3 from "./pages/root-design3/index";
import GraduateCourses from "./pages/shedule/graduate-courses";
import TrainingSchedule from "./pages/shedule/training";
import MasterClassesSchedule from "./pages/shedule/master-classes";
import CoursesSchedule from "./pages/shedule/courses";
import Jewelry from "./pages/jewelry/index";
import IncreaseQualifications from "./pages/increase-qualifications/index";
import LauncherStartup from "./pages/launch-technology-startup/index";
import PersonalBrand from "./pages/personal-brand/index";
import Advertising from "./pages/advertising-as-a-communication/index";
import FashionBrand from "./pages/fashion-brand-promotion-gid/index";
import Type2 from "./pages/type2/index";
import Type3 from "./pages/type2/index2";
import Corporate from "./pages/corporate/index";
import NetworPrograms from "./pages/network-educational-programs/index";
import Internship from "./pages/internship-in-milan/index";
import MasterKlass from "./pages/master-class/index";
import MasterKlassOld from "./pages/master-class-old/index";
import BusinessStyle from "./pages/business-style/index";
import InteriorDesignOld from "./pages/living-interior-design-and-decoration-old2";
import Prohorovich from "./pages/teachers/prohorovich";
import Lms from "./pages/lms/index";
import ErikaNenasheva from "./pages/teachers/nenasheva";
import SmmMs from "./pages/smm-ms/index";
import Shopper from "./pages/profession-imagemaker-stylist-shopper/index";
import FutureOfFashion from "./pages/future-of-fashion/index";
import MilanDesignWeek from "./pages/milan-design-week/index";
import TestMeeting from "./pages/testclickmeeting/index";
import GraphicDesign from "./pages/graphic-design/index";
import CPM2020 from "./pages/cpm-w2020/index";
import Make05032020 from "./pages/make05032020/index";
import JapanFashion from "./pages/japanese-fashion-philosophy/index";
import MasterClassArchive from "./pages/master-class/archive";
import RootTest2 from "./pages/root-test2/index";
import RootTest3 from "./pages/root-test3/index";
import PreRaphaelites from "./pages/preraphaelites/index";
import FashionStylingTest from "./pages/fashion-styling-test/index";
import ImageConsaltingTest from "./pages/ic-test/index";
import EducationDoc from "./pages/educationdoc/index";
import EducationOnline from "./pages/educationdonline/index";
import VMTest from "./pages/vm-test/index";
import Islamova from "./pages/teachers/islamova";
import DDITest from "./pages/ddi-test/index";
import ImageManagement from "./pages/imagemanagement/index";

import Analitics from "./analitics";

export const routes = (
  <Switch>
    <Route path="/aristotwist" component={Aristotwist} />
    <Route path="/business_boutique" component={Boutique} />
    <Route path="/conceptualfashion" component={Concept} />
    <Route path="/fashion-history" component={History} />
    <Route path="/fashion-media-digital" component={Media} />
    <Route path="/fashion-visual-merchandising" component={Merchandisign} />
    <Route path="/foto-course" component={Photo} />
    <Route path="/image-style" component={ImageStyle} />

    <Redirect from="/imagemaker-second-degree" to="/second-degree-imagemaker" />
    <Route path="/second-degree-imagemaker" component={Imagemaker} />

    <Route path="/i2v" component={ImagemakerLanding} />
    <Route path="/interior-design" component={Interior} />
    <Route path="/makeup" component={Makeup} />
    <Route path="/mastery-of-writing-text" component={Text} />
    <Route path="/political-style" component={Political} />
    <Route path="/political-style-old" component={PoliticalOld} />
    <Route path="/practice-image-consulting" component={Practice} />
    <Route path="/press-secretary" component={Secretary} />
    <Route path="/style-psychology" component={Psychology} />
    <Route path="/links" component={Links} />
    <Route path="/modern-fashion-style" component={Modern} />
    <Route
      path="/living-interior-design-and-decoration"
      component={InteriorProfi}
    />
    <Route
      path="/visual-merchandising-and-showcases-design"
      component={Vitrinism}
    />
    <Route path="/profashion" component={Profashion} />
    <Route path="/profashion-test" component={ProfashionTest} />
    <Route
      path="/profashion-special-offer"
      component={ProfashionSpecialOffer}
    />
    <Route path="/about" component={About} />
    <Route path="/teachers" component={Teachers} />
    <Route path="/graduates" component={Graduates} />
    <Route path="/natalya_gorskyh" component={Gorskyh} />
    <Route path="/ruslan_migranov" component={Migranov} />
    <Route path="/tatiana_fomina" component={Fomina} />
    <Route path="/marina_kostarnova" component={Kostarnova} />
    <Route path="/svetlana_kononets" component={Kononets} />
    <Route path="/galina_varakina" component={Varakina} />
    <Route path="/liana_bahova" component={Bahova} />
    <Route path="/troepolskaya" component={Troepolskaya} />
    <Route path="/marina_bonetskaya" component={Bonetskaya} />
    <Route path="/catherine_britsova" component={Britsova} />
    <Route path="/anna_kachalina" component={Kachalina} />
    <Route path="/natalia_shved" component={Shved} />
    <Route path="/maria_rodina" component={Rodina} />
    <Route path="/valery_cherednichenko" component={Cherednichenko} />
    <Route path="/nadezhda_iskhakova" component={Iskhakova} />
    <Route path="/rosemary_thurman" component={Thurman} />
    <Route path="/emilia_zhilova" component={Zhilova} />
    <Route path="/anna_antonova" component={Antonova} />
    <Route path="/svetlana_mikhailenko" component={Mikhailenko} />
    <Route path="/mary_sargsyan" component={Sargsyan} />
    <Route path="/yana_ahmetova" component={Ahmetova} />
    <Route path="/oljga_olyushina" component={Olyushina} />
    <Route path="/islamova" component={Islamova} />
    <Route path="/information/rules" component={Rules} />
    <Route path="/information/agree" component={Agree} />
    <Route path="/information/politic" component={Security} />
    <Route path="/information" component={Info} />
    <Route path="/consulting" component={Consulting} />
    <Route path="/blog/professiya-myslitel" component={ProfessiyaMyslitel} />
    <Route path="/blog/index.php?entryid=124" component={ProfessiyaMyslitel} />
    <Route
      path="/blog/dizaynerskie-brendy-v-fashion-biznese"
      component={DizaynerskieBrendy}
    />
    <Route path="/blog/moda-i-modeliery" component={ModaModeliery} />
    <Route path="/blog/istoriya-domov-mody" component={HistoriHomesFashion} />
    <Route path="/blog/glamur" component={Glamur} />
    <Route path="/blog/moda-i-moral" component={ModaMoral} />
    <Route path="/blog/kuturye-mechty" component={Dior} />
    <Route path="/expert-articles" component={Articles} />
    <Route
      path="/blog/ironiya-sudby-ili-esche-odna-statiya-o-novogodnih-naryadah"
      component={Irony}
    />
    <Route path="/blog/moda-v-meshke" component={Meshok} />
    <Route path="/blog/ty-mne-eto-broshj" component={Broshj} />
    <Route path="/blog/zverski-krasiva" component={Zverj} />
    <Route
      path="/blog/kanotje-solomennaya-shlyapka-s-bogatoj-istoriej"
      component={Soloma}
    />
    <Route path="/blog/moda-na-vremya" component={Vremya} />
    <Route path="/blog/platye-kotoroe-idet-vsem" component={Dress} />
    <Route path="/blog/kushatj-podano-na-podium" component={Kushatj} />
    <Route path="/blog/smertj-ey-k-litsu" component={More} />
    <Route
      path="/blog/individualnyj-stilj-tvorchestvo-ili-neobhodimostj"
      component={Individ}
    />
    <Route
      path="/blog/analiz-kollektsii-maison-margiela"
      component={MaisonMargiela}
    />
    <Route path="/blog/detskaya-moda-vchera-i-segodnya" component={Childrens} />
    <Route
      path="/blog/dva-sapoga-para-ili-preslovutyj-family-look"
      component={FamilyLook}
    />
    <Route path="/contacts" component={Contacts} />
    <Route path="/shedule" component={Shedule} />
    <Route path="/training" component={Training} />
    <Route path="/profi-fashion-journalist" component={ProfiJournalist} />
    <Route path="/management-is-in-fashion" component={Management} />
    <Route path="/make-up" component={MakeUp} />
    <Route path="/self_style" component={SelfStyle} />
    <Route path="/self-style" component={SelfStyle} />
    <Route path="/special-courses" component={Speccourses} />
    <Route path="/order" component={Order} />
    <Route path="/club" component={Club} />
    <Route path="/course_catalog" component={Catalog} />
    <Route path="/elearning" component={Elearning} />
    <Route path="/sofjya_zozulya" component={SofjyaZozulya} />
    <Route path="/alexandra_morgun" component={Morgun} />
    <Route path="/alena_minkina" component={Minkina} />
    <Route path="/anastasiya_glushkova" component={Glushkova} />
    <Route path="/anna_marchuk" component={Marchuk} />
    <Route path="/anna_nazimova" component={Nazimova} />
    <Route path="/guljvura_nalibaeva" component={Nalibaeva} />
    <Route path="/guljsara_osorova" component={Osorova} />
    <Route path="/ekaterina_vanjshina" component={Vanjshina} />
    <Route path="/irina_varlakova" component={Varlakova} />
    <Route path="/larisa_manicheva" component={Manicheva} />
    <Route path="/style4make" component={Style4Make} />
    <Route path="/cf" component={ConceptNew} />
    <Route path="/styleevolution" component={StyleEvolution} />
    <Route path="/styleevolution-futura" component={StyleEvolutionFut} />
    <Route path="/styleevolution-garamond" component={StyleEvolutionG} />
    <Route path="/styleevolution-forum" component={StyleEvolutionF} />
    <Route path="/styleevolution-istok" component={StyleEvolutionI} />
    <Route path="/i2v-test" component={ImagemakerTest} />
    <Route path="/root-test" component={RootTest} />
    <Route path="/styleschool" component={Styleschool} />
    <Route path="/fashionschool" component={FashionSchool} />
    <Route path="/schoolofdesign" component={SchoolDesign} />
    <Route path="/artschool" component={ArtSchool} />
    <Route path="/schoolofmanagement" component={SchoolManagement} />
    <Route
      path="/information-about-educational-organization"
      component={Information}
    />
    <Route path="/dokumenty" component={Dokumenty} />
    <Route
      path="/finansovo-hozyaystvennaya-deyateljnostj"
      component={FinansHoz}
    />
    <Route
      path="/materialjno-tehnicheskoe-osnaschenie"
      component={MatTechOsnaschenie}
    />
    <Route path="/obrazovateljnye-programmy" component={Programmy} />
    <Route path="/obrazovateljnye-standarty" component={Standarty} />
    <Route path="/osnovnye-svedeniya" component={Svedeniya} />
    <Route path="/platnye-obrazovateljnye-uslugi" component={PlatnyeUslugi} />
    <Route
      path="/rukovodstvo-i-pedagogicheskiy-sostav"
      component={Rukovodstvo}
    />
    <Route path="/stipendii" component={Stipendii} />
    <Route path="/struktura-i-organy-upravleniya" component={Struktura} />
    <Route path="/vakantnye-mesta-dlya-priema" component={Vakant} />
    <Route path="/fashion-styling" component={FashionStyling} />
    <Route path="/crisis_management_fashion_butik" component={Crisis} />
    <Route path="/marketing-for-stylists" component={MarketingForStylists} />
    <Route path="/mfs" component={MarketingForStylistsLanding} />
    <Route path="/from_classic_to_postmodern" component={Postmodern} />
    <Route path="/concepts_of_fashion" component={SocConcept} />
    <Route path="/motivation-of-staff" component={Motivation} />
    <Route path="/denim-fashion-trends" component={Denim} />
    <Route path="/premium-brands" component={Brands} />
    <Route path="/current-season-trends" component={TrendsSeason} />
    <Route path="/putting-the-capsule-on-vacation" component={Capsule} />
    <Route path="/fashion-franchising" component={Franchising} />
    <Route path="/typology-of-architectural-forms" component={Typology} />
    <Route path="/history-of-styles-in-interior" component={HistoryInterior} />
    <Route path="/how-to-choose-a-franchise" component={HowFranchise} />
    <Route path="/how-to-create-a-franchise" component={HowCreateFranchise} />
    <Route path="/psychology-of-style" component={PsychologyStyle} />
    <Route path="/test" component={PsSt} />
    <Route path="/elena-lamonova" component={Lamonova} />
    <Route path="/margarita-hlestova" component={Hlestova} />
    <Route path="/archive" component={Archive} />
    <Route path="/tatyana_rotar" component={Rotar} />
    <Route path="/interiordecor" component={InteriorDecor} />
    <Route
      path="/international-communications"
      component={InternationalCommunications}
    />
    <Route path="/t1" component={RootDesign} />
    <Route path="/t2" component={RootDesign2} />
    <Route path="/t3" component={RootDesign3} />
    <Route path="/schedule/graduate-courses" component={GraduateCourses} />
    <Route path="/schedule/training" component={TrainingSchedule} />
    <Route path="/schedule/master-classes" component={MasterClassesSchedule} />
    <Route path="/schedule/courses" component={CoursesSchedule} />
    <Route path="/jewelry" component={Jewelry} />
    <Route path="/increase-qualifications" component={IncreaseQualifications} />
    <Route path="/launch-technology-startup" component={LauncherStartup} />
    <Route path="/advertising-as-a-communication" component={Advertising} />
    <Route path="/personal-brand" component={PersonalBrand} />
    <Route path="/fashion-brand-promotion-gid" component={FashionBrand} />
    <Route path="/type2" component={Type2} />
    <Route path="/type3" component={Type3} />
    <Route path="/corporate" component={Corporate} />
    <Route path="/network_educational_programs" component={NetworPrograms} />
    <Route path="/network-educational-programs" component={NetworPrograms} />
    <Route path="/internship-in-milan" component={Internship} />
    <Route path="/master-klass" component={MasterKlass} />
    <Route path="/master-class" component={MasterKlass} />
    <Route path="/master_klass" component={MasterKlass} />
    <Route path="/master-class-old" component={MasterKlassOld} />
    <Route path="/business-style" component={BusinessStyle} />
    <Route
      path="/living-interior-design-and-decoration-old"
      component={InteriorDesignOld}
    />
    <Route path="/elena-prohorovich" component={Prohorovich} />
    <Route path="/lms" component={Lms} />
    <Route path="/erika_nenasheva" component={ErikaNenasheva} />
    <Route path="/smm_ms" component={SmmMs} />
    <Route path="/profession_imagemaker_stylist_shopper" component={Shopper} />
    <Route path="/future_of_fashion" component={FutureOfFashion} />
    <Route path="/milan-design-week" component={MilanDesignWeek} />
    <Route path="/testclickmeeting" component={TestMeeting} />
    <Route path="/graphic-design" component={GraphicDesign} />
    <Route path="/cpm_w2020" component={CPM2020} />
    <Route path="/make05032020" component={Make05032020} />
    <Route path="/japanese-fashion-philosophy" component={JapanFashion} />
    <Route path="/master-class-archive" component={MasterClassArchive} />
    <Route path="/root-test2" component={RootTest2} />
    <Route path="/root-test3" component={RootTest3} />
    <Route path="/pre-raphaelites" component={PreRaphaelites} />
    <Route path="/fs-test" component={FashionStylingTest} />
    <Route path="/ic-test" component={ImageConsaltingTest} />
    <Route path="/educationdoc" component={EducationDoc} />
    <Route path="/educationonline" component={EducationOnline} />
    <Route path="/vm-test" component={VMTest} />
    <Route path="/ddi-test" component={DDITest} />
    <Route path="/imagemanagement" component={ImageManagement} />

    <Route path="/home" component={Root} />
    <Route component={Root} />
  </Switch>
);

class Routes extends React.Component {
  componentDidMount() {
    const jssStyles = document.getElementById("jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Analitics />
        {routes}
      </div>
    );
  }
}

export default Routes;
