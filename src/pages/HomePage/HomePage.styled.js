import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from 'const/breakepoints';

export const Section = styled.section`
  padding-left: 20px;
  padding-right: 0;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  border: 2px solid #fbfbfb;
  text-decoration: none;
  color: #fbfbfb;
  font-weight: 500;
  font-size: 20px;
  transition: 200ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  transition-property: color, border, background-color;
  &:is(:focus, :hover) {
    color: #262626;
    border: 2px solid #fbfbfb;
    background-color: #fbfbfb;
  }
`;

export const ButtonFilled = styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  border: 2px solid #ff8a05;
  text-decoration: none;
  color: #ff8a05;
  font-weight: 500;
  font-size: 20px;
  margin-right: 60px;
  transition: 200ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  transition-property: color, border, background-color;
  &:is(:focus, :hover) {
    color: #262626;
    border: 2px solid #ff8a05;
    background-color: #ff8a05;
  }
`;

export const Headline = styled.h1`
  font-size: 64px;
  padding: 0;
  margin-bottom: 50px;
  margin-top: 0;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 50px;
`;

export const TextBox = styled.div`
  width: fit-content;
  max-width: 620px;
`;

export const Bullets = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 150px;
  display: flex;
  justify-content: space-between;
`;

export const BulletItem = styled.li`
  display: flex;
  align-items: center;
`;

export const BulletImage = styled.img`
  width: 30px;
  height: 30px;
`;

export const ImageText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 500;
  margin-left: 5px;
  height: 21px;
`;

export const Circle = styled.div`
  width: 3px;
  height: 3px;
  background-color: #ff8a05;
  border-radius: 50%;
`;

export const ImageBox = styled.div`
  width: 800px;
  height: 800px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 800 800'%3E%3Cg fill='hsl(32, 100%25, 51%25)'%3E%3Ccircle r='0.5' cx='405' cy='400' opacity='0.77'%3E%3C/circle%3E%3Ccircle r='0.5' cx='402' cy='406' opacity='0.77'%3E%3C/circle%3E%3Ccircle r='0.5' cx='394' cy='404' opacity='0.68'%3E%3C/circle%3E%3Ccircle r='0.5' cx='393' cy='394' opacity='0.71'%3E%3C/circle%3E%3Ccircle r='0.5' cx='404' cy='391' opacity='0.20'%3E%3C/circle%3E%3Ccircle r='0.5' cx='411' cy='401' opacity='0.53'%3E%3C/circle%3E%3Ccircle r='0.5' cx='402' cy='412' opacity='0.20'%3E%3C/circle%3E%3Ccircle r='0.5' cx='388' cy='406' opacity='0.85'%3E%3C/circle%3E%3Ccircle r='0.5' cx='390' cy='389' opacity='0.46'%3E%3C/circle%3E%3Ccircle r='0.5' cx='408' cy='386' opacity='0.16'%3E%3C/circle%3E%3Ccircle r='0.5' cx='417' cy='404' opacity='0.29'%3E%3C/circle%3E%3Ccircle r='0.5' cx='401' cy='419' opacity='0.86'%3E%3C/circle%3E%3Ccircle r='0.5' cx='381' cy='407' opacity='0.63'%3E%3C/circle%3E%3Ccircle r='0.5' cx='387' cy='383' opacity='0.18'%3E%3C/circle%3E%3Ccircle r='0.5' cx='414' cy='382' opacity='0.19'%3E%3C/circle%3E%3Ccircle r='0.5' cx='423' cy='408' opacity='0.98'%3E%3C/circle%3E%3Ccircle r='1' cx='398' cy='425' opacity='0.89'%3E%3C/circle%3E%3Ccircle r='1' cx='374' cy='406' opacity='0.65'%3E%3C/circle%3E%3Ccircle r='1' cx='386' cy='376' opacity='0.89'%3E%3C/circle%3E%3Ccircle r='1' cx='420' cy='379' opacity='0.12'%3E%3C/circle%3E%3Ccircle r='1' cx='427' cy='414' opacity='0.96'%3E%3C/circle%3E%3Ccircle r='1' cx='394' cy='431' opacity='0.61'%3E%3C/circle%3E%3Ccircle r='1' cx='367' cy='404' opacity='0.15'%3E%3C/circle%3E%3Ccircle r='1' cx='386' cy='368' opacity='0.24'%3E%3C/circle%3E%3Ccircle r='1' cx='427' cy='377' opacity='0.97'%3E%3C/circle%3E%3Ccircle r='1' cx='431' cy='420' opacity='0.40'%3E%3C/circle%3E%3Ccircle r='1' cx='389' cy='437' opacity='0.48'%3E%3C/circle%3E%3Ccircle r='1' cx='360' cy='400' opacity='0.36'%3E%3C/circle%3E%3Ccircle r='1' cx='388' cy='361' opacity='0.81'%3E%3C/circle%3E%3Ccircle r='1' cx='435' cy='377' opacity='0.85'%3E%3C/circle%3E%3Ccircle r='1' cx='433' cy='428' opacity='0.47'%3E%3C/circle%3E%3Ccircle r='1' cx='382' cy='441' opacity='0.77'%3E%3C/circle%3E%3Ccircle r='1' cx='354' cy='395' opacity='0.91'%3E%3C/circle%3E%3Ccircle r='1' cx='392' cy='353' opacity='0.79'%3E%3C/circle%3E%3Ccircle r='1' cx='443' cy='378' opacity='0.74'%3E%3C/circle%3E%3Ccircle r='1' cx='434' cy='436' opacity='0.92'%3E%3C/circle%3E%3Ccircle r='1' cx='374' cy='444' opacity='0.54'%3E%3C/circle%3E%3Ccircle r='1' cx='349' cy='388' opacity='0.77'%3E%3C/circle%3E%3Ccircle r='1' cx='397' cy='346' opacity='0.86'%3E%3C/circle%3E%3Ccircle r='1' cx='452' cy='381' opacity='0.34'%3E%3C/circle%3E%3Ccircle r='1' cx='433' cy='445' opacity='0.87'%3E%3C/circle%3E%3Ccircle r='1' cx='366' cy='446' opacity='0.33'%3E%3C/circle%3E%3Ccircle r='1' cx='345' cy='380' opacity='0.40'%3E%3C/circle%3E%3Ccircle r='1' cx='404' cy='340' opacity='0.13'%3E%3C/circle%3E%3Ccircle r='1' cx='460' cy='386' opacity='0.83'%3E%3C/circle%3E%3Ccircle r='1' cx='431' cy='454' opacity='0.59'%3E%3C/circle%3E%3Ccircle r='1' cx='356' cy='446' opacity='0.96'%3E%3C/circle%3E%3Ccircle r='1.5' cx='342' cy='371' opacity='0.54'%3E%3C/circle%3E%3Ccircle r='1.5' cx='412' cy='335' opacity='0.65'%3E%3C/circle%3E%3Ccircle r='1.5' cx='467' cy='392' opacity='0.90'%3E%3C/circle%3E%3Ccircle r='1.5' cx='427' cy='463' opacity='0.49'%3E%3C/circle%3E%3Ccircle r='1.5' cx='346' cy='445' opacity='0.49'%3E%3C/circle%3E%3Ccircle r='1.5' cx='340' cy='360' opacity='0.85'%3E%3C/circle%3E%3Ccircle r='1.5' cx='421' cy='330' opacity='0.31'%3E%3C/circle%3E%3Ccircle r='1.5' cx='474' cy='400' opacity='0.21'%3E%3C/circle%3E%3Ccircle r='1.5' cx='421' cy='472' opacity='0.65'%3E%3C/circle%3E%3Ccircle r='1.5' cx='336' cy='442' opacity='0.31'%3E%3C/circle%3E%3Ccircle r='1.5' cx='341' cy='350' opacity='0.30'%3E%3C/circle%3E%3Ccircle r='1.5' cx='432' cy='327' opacity='0.48'%3E%3C/circle%3E%3Ccircle r='1.5' cx='480' cy='410' opacity='0.70'%3E%3C/circle%3E%3Ccircle r='1.5' cx='414' cy='481' opacity='0.70'%3E%3C/circle%3E%3Ccircle r='1.5' cx='326' cy='437' opacity='0.43'%3E%3C/circle%3E%3Ccircle r='1.5' cx='342' cy='338' opacity='0.38'%3E%3C/circle%3E%3Ccircle r='1.5' cx='443' cy='326' opacity='0.21'%3E%3C/circle%3E%3Ccircle r='1.5' cx='484' cy='421' opacity='0.82'%3E%3C/circle%3E%3Ccircle r='1.5' cx='405' cy='488' opacity='0.17'%3E%3C/circle%3E%3Ccircle r='1.5' cx='316' cy='430' opacity='0.51'%3E%3C/circle%3E%3Ccircle r='1.5' cx='346' cy='327' opacity='0.28'%3E%3C/circle%3E%3Ccircle r='1.5' cx='455' cy='327' opacity='0.79'%3E%3C/circle%3E%3Ccircle r='1.5' cx='487' cy='432' opacity='0.65'%3E%3C/circle%3E%3Ccircle r='1.5' cx='394' cy='494' opacity='0.77'%3E%3C/circle%3E%3Ccircle r='1.5' cx='307' cy='422' opacity='0.11'%3E%3C/circle%3E%3Ccircle r='1.5' cx='352' cy='316' opacity='0.92'%3E%3C/circle%3E%3Ccircle r='1.5' cx='468' cy='329' opacity='0.88'%3E%3C/circle%3E%3Ccircle r='1.5' cx='489' cy='445' opacity='0.28'%3E%3C/circle%3E%3Ccircle r='1.5' cx='382' cy='499' opacity='0.37'%3E%3C/circle%3E%3Ccircle r='1.5' cx='298' cy='411' opacity='0.74'%3E%3C/circle%3E%3Ccircle r='1.5' cx='360' cy='305' opacity='0.29'%3E%3C/circle%3E%3Ccircle r='2' cx='481' cy='333' opacity='0.74'%3E%3C/circle%3E%3Ccircle r='2' cx='488' cy='459' opacity='0.10'%3E%3C/circle%3E%3Ccircle r='2' cx='368' cy='503' opacity='0.83'%3E%3C/circle%3E%3Ccircle r='2' cx='291' cy='399' opacity='0.35'%3E%3C/circle%3E%3Ccircle r='2' cx='369' cy='294' opacity='0.86'%3E%3C/circle%3E%3Ccircle r='2' cx='493' cy='340' opacity='0.73'%3E%3C/circle%3E%3Ccircle r='2' cx='486' cy='473' opacity='0.36'%3E%3C/circle%3E%3Ccircle r='2' cx='354' cy='504' opacity='0.27'%3E%3C/circle%3E%3Ccircle r='2' cx='286' cy='386' opacity='0.92'%3E%3C/circle%3E%3Ccircle r='2' cx='381' cy='285' opacity='0.36'%3E%3C/circle%3E%3Ccircle r='2' cx='506' cy='348' opacity='0.68'%3E%3C/circle%3E%3Ccircle r='2' cx='481' cy='487' opacity='0.76'%3E%3C/circle%3E%3Ccircle r='2' cx='339' cy='504' opacity='0.53'%3E%3C/circle%3E%3Ccircle r='2' cx='282' cy='371' opacity='0.82'%3E%3C/circle%3E%3Ccircle r='2' cx='394' cy='277' opacity='0.66'%3E%3C/circle%3E%3Ccircle r='2' cx='517' cy='359' opacity='0.78'%3E%3C/circle%3E%3Ccircle r='2' cx='474' cy='501' opacity='0.86'%3E%3C/circle%3E%3Ccircle r='2' cx='324' cy='501' opacity='0.40'%3E%3C/circle%3E%3Ccircle r='2' cx='280' cy='355' opacity='0.95'%3E%3C/circle%3E%3Ccircle r='2' cx='409' cy='271' opacity='0.72'%3E%3C/circle%3E%3Ccircle r='2' cx='527' cy='371' opacity='0.50'%3E%3C/circle%3E%3Ccircle r='2' cx='465' cy='515' opacity='0.11'%3E%3C/circle%3E%3Ccircle r='2' cx='308' cy='496' opacity='0.58'%3E%3C/circle%3E%3Ccircle r='2' cx='281' cy='339' opacity='0.43'%3E%3C/circle%3E%3Ccircle r='2' cx='425' cy='267' opacity='0.70'%3E%3C/circle%3E%3Ccircle r='2' cx='536' cy='385' opacity='0.15'%3E%3C/circle%3E%3Ccircle r='2' cx='453' cy='527' opacity='0.14'%3E%3C/circle%3E%3Ccircle r='2' cx='292' cy='489' opacity='0.54'%3E%3C/circle%3E%3Ccircle r='2' cx='283' cy='322' opacity='0.56'%3E%3C/circle%3E%3Ccircle r='2' cx='442' cy='264' opacity='0.78'%3E%3C/circle%3E%3Ccircle r='2' cx='543' cy='401' opacity='0.86'%3E%3C/circle%3E%3Ccircle r='2' cx='440' cy='539' opacity='0.70'%3E%3C/circle%3E%3Ccircle r='2.5' cx='277' cy='479' opacity='0.65'%3E%3C/circle%3E%3Ccircle r='2.5' cx='288' cy='304' opacity='0.74'%3E%3C/circle%3E%3Ccircle r='2.5' cx='460' cy='264' opacity='0.37'%3E%3C/circle%3E%3Ccircle r='2.5' cx='548' cy='419' opacity='0.12'%3E%3C/circle%3E%3Ccircle r='2.5' cx='425' cy='549' opacity='0.11'%3E%3C/circle%3E%3Ccircle r='2.5' cx='263' cy='467' opacity='0.24'%3E%3C/circle%3E%3Ccircle r='2.5' cx='296' cy='287' opacity='0.92'%3E%3C/circle%3E%3Ccircle r='2.5' cx='479' cy='267' opacity='0.69'%3E%3C/circle%3E%3Ccircle r='2.5' cx='551' cy='438' opacity='0.91'%3E%3C/circle%3E%3Ccircle r='2.5' cx='407' cy='557' opacity='0.72'%3E%3C/circle%3E%3Ccircle r='2.5' cx='250' cy='453' opacity='0.36'%3E%3C/circle%3E%3Ccircle r='2.5' cx='306' cy='271' opacity='0.42'%3E%3C/circle%3E%3Ccircle r='2.5' cx='498' cy='272' opacity='0.43'%3E%3C/circle%3E%3Ccircle r='2.5' cx='552' cy='457' opacity='0.79'%3E%3C/circle%3E%3Ccircle r='2.5' cx='389' cy='563' opacity='0.33'%3E%3C/circle%3E%3Ccircle r='2.5' cx='239' cy='436' opacity='0.74'%3E%3C/circle%3E%3Ccircle r='2.5' cx='319' cy='255' opacity='0.20'%3E%3C/circle%3E%3Ccircle r='2.5' cx='516' cy='279' opacity='0.76'%3E%3C/circle%3E%3Ccircle r='2.5' cx='550' cy='478' opacity='0.46'%3E%3C/circle%3E%3Ccircle r='2.5' cx='368' cy='567' opacity='0.71'%3E%3C/circle%3E%3Ccircle r='2.5' cx='230' cy='418' opacity='0.43'%3E%3C/circle%3E%3Ccircle r='2.5' cx='334' cy='241' opacity='0.17'%3E%3C/circle%3E%3Ccircle r='2.5' cx='535' cy='290' opacity='0.78'%3E%3C/circle%3E%3Ccircle r='2.5' cx='545' cy='498' opacity='0.51'%3E%3C/circle%3E%3Ccircle r='2.5' cx='347' cy='568' opacity='0.35'%3E%3C/circle%3E%3Ccircle r='2.5' cx='222' cy='398' opacity='0.71'%3E%3C/circle%3E%3Ccircle r='2.5' cx='351' cy='228' opacity='0.66'%3E%3C/circle%3E%3Ccircle r='2.5' cx='552' cy='303' opacity='0.68'%3E%3C/circle%3E%3Ccircle r='2.5' cx='538' cy='519' opacity='0.72'%3E%3C/circle%3E%3Ccircle r='2.5' cx='325' cy='567' opacity='0.34'%3E%3C/circle%3E%3Ccircle r='2.5' cx='217' cy='376' opacity='0.81'%3E%3C/circle%3E%3Ccircle r='3' cx='370' cy='217' opacity='0.43'%3E%3C/circle%3E%3Ccircle r='3' cx='568' cy='318' opacity='0.39'%3E%3C/circle%3E%3Ccircle r='3' cx='527' cy='538' opacity='0.51'%3E%3C/circle%3E%3Ccircle r='3' cx='303' cy='563' opacity='0.84'%3E%3C/circle%3E%3Ccircle r='3' cx='215' cy='354' opacity='0.77'%3E%3C/circle%3E%3Ccircle r='3' cx='391' cy='208' opacity='0.34'%3E%3C/circle%3E%3Ccircle r='3' cx='582' cy='336' opacity='0.28'%3E%3C/circle%3E%3Ccircle r='3' cx='514' cy='558' opacity='0.98'%3E%3C/circle%3E%3Ccircle r='3' cx='281' cy='555' opacity='0.43'%3E%3C/circle%3E%3Ccircle r='3' cx='216' cy='330' opacity='0.19'%3E%3C/circle%3E%3Ccircle r='3' cx='414' cy='202' opacity='0.64'%3E%3C/circle%3E%3Ccircle r='3' cx='595' cy='357' opacity='0.95'%3E%3C/circle%3E%3Ccircle r='3' cx='498' cy='575' opacity='0.25'%3E%3C/circle%3E%3Ccircle r='3' cx='259' cy='545' opacity='0.30'%3E%3C/circle%3E%3Ccircle r='3' cx='220' cy='306' opacity='0.68'%3E%3C/circle%3E%3Ccircle r='3' cx='438' cy='199' opacity='0.13'%3E%3C/circle%3E%3Ccircle r='3' cx='605' cy='379' opacity='0.67'%3E%3C/circle%3E%3Ccircle r='3' cx='479' cy='591' opacity='0.97'%3E%3C/circle%3E%3Ccircle r='3' cx='238' cy='532' opacity='0.23'%3E%3C/circle%3E%3Ccircle r='3' cx='226' cy='282' opacity='0.25'%3E%3C/circle%3E%3Ccircle r='3' cx='464' cy='199' opacity='0.49'%3E%3C/circle%3E%3Ccircle r='3' cx='612' cy='403' opacity='0.46'%3E%3C/circle%3E%3Ccircle r='3' cx='458' cy='606' opacity='0.95'%3E%3C/circle%3E%3Ccircle r='3' cx='219' cy='515' opacity='0.23'%3E%3C/circle%3E%3Ccircle r='3' cx='237' cy='259' opacity='0.49'%3E%3C/circle%3E%3Ccircle r='3' cx='489' cy='202' opacity='0.25'%3E%3C/circle%3E%3Ccircle r='3' cx='617' cy='429' opacity='0.72'%3E%3C/circle%3E%3Ccircle r='3' cx='435' cy='617' opacity='0.15'%3E%3C/circle%3E%3Ccircle r='3' cx='201' cy='496' opacity='0.72'%3E%3C/circle%3E%3Ccircle r='3' cx='250' cy='236' opacity='0.92'%3E%3C/circle%3E%3Ccircle r='3' cx='515' cy='208' opacity='0.35'%3E%3C/circle%3E%3Ccircle r='3.5' cx='618' cy='455' opacity='0.83'%3E%3C/circle%3E%3Ccircle r='3.5' cx='410' cy='626' opacity='0.68'%3E%3C/circle%3E%3Ccircle r='3.5' cx='185' cy='474' opacity='0.64'%3E%3C/circle%3E%3Ccircle r='3.5' cx='266' cy='214' opacity='0.42'%3E%3C/circle%3E%3Ccircle r='3.5' cx='540' cy='218' opacity='0.11'%3E%3C/circle%3E%3Ccircle r='3.5' cx='616' cy='483' opacity='0.65'%3E%3C/circle%3E%3Ccircle r='3.5' cx='383' cy='632' opacity='0.78'%3E%3C/circle%3E%3Ccircle r='3.5' cx='171' cy='450' opacity='0.57'%3E%3C/circle%3E%3Ccircle r='3.5' cx='286' cy='194' opacity='0.78'%3E%3C/circle%3E%3Ccircle r='3.5' cx='565' cy='231' opacity='0.33'%3E%3C/circle%3E%3Ccircle r='3.5' cx='611' cy='510' opacity='0.83'%3E%3C/circle%3E%3Ccircle r='3.5' cx='355' cy='635' opacity='0.13'%3E%3C/circle%3E%3Ccircle r='3.5' cx='161' cy='424' opacity='0.80'%3E%3C/circle%3E%3Ccircle r='3.5' cx='308' cy='176' opacity='0.75'%3E%3C/circle%3E%3Ccircle r='3.5' cx='589' cy='247' opacity='0.96'%3E%3C/circle%3E%3Ccircle r='3.5' cx='602' cy='538' opacity='0.48'%3E%3C/circle%3E%3Ccircle r='3.5' cx='325' cy='634' opacity='0.43'%3E%3C/circle%3E%3Ccircle r='3.5' cx='153' cy='396' opacity='0.85'%3E%3C/circle%3E%3Ccircle r='3.5' cx='333' cy='161' opacity='0.53'%3E%3C/circle%3E%3Ccircle r='3.5' cx='611' cy='267' opacity='0.73'%3E%3C/circle%3E%3Ccircle r='3.5' cx='589' cy='565' opacity='0.80'%3E%3C/circle%3E%3Ccircle r='3.5' cx='296' cy='630' opacity='0.28'%3E%3C/circle%3E%3Ccircle r='3.5' cx='149' cy='366' opacity='0.27'%3E%3C/circle%3E%3Ccircle r='3.5' cx='360' cy='149' opacity='0.73'%3E%3C/circle%3E%3Ccircle r='3.5' cx='631' cy='289' opacity='0.55'%3E%3C/circle%3E%3Ccircle r='3.5' cx='573' cy='590' opacity='0.96'%3E%3C/circle%3E%3Ccircle r='3.5' cx='267' cy='621' opacity='0.72'%3E%3C/circle%3E%3Ccircle r='3.5' cx='148' cy='335' opacity='0.27'%3E%3C/circle%3E%3Ccircle r='3.5' cx='390' cy='139' opacity='0.23'%3E%3C/circle%3E%3Ccircle r='3.5' cx='648' cy='315' opacity='0.96'%3E%3C/circle%3E%3Ccircle r='3.5' cx='553' cy='614' opacity='0.38'%3E%3C/circle%3E%3Ccircle r='4' cx='238' cy='609' opacity='0.22'%3E%3C/circle%3E%3Ccircle r='4' cx='152' cy='304' opacity='0.60'%3E%3C/circle%3E%3Ccircle r='4' cx='421' cy='133' opacity='0.38'%3E%3C/circle%3E%3Ccircle r='4' cx='663' cy='343' opacity='0.24'%3E%3C/circle%3E%3Ccircle r='4' cx='531' cy='636' opacity='0.73'%3E%3C/circle%3E%3Ccircle r='4' cx='210' cy='594' opacity='0.78'%3E%3C/circle%3E%3Ccircle r='4' cx='159' cy='273' opacity='0.57'%3E%3C/circle%3E%3Ccircle r='4' cx='453' cy='131' opacity='0.13'%3E%3C/circle%3E%3Ccircle r='4' cx='674' cy='373' opacity='0.75'%3E%3C/circle%3E%3Ccircle r='4' cx='504' cy='656' opacity='0.48'%3E%3C/circle%3E%3Ccircle r='4' cx='184' cy='574' opacity='0.30'%3E%3C/circle%3E%3Ccircle r='4' cx='170' cy='242' opacity='0.40'%3E%3C/circle%3E%3Ccircle r='4' cx='486' cy='133' opacity='0.83'%3E%3C/circle%3E%3Ccircle r='4' cx='681' cy='406' opacity='0.91'%3E%3C/circle%3E%3Ccircle r='4' cx='476' cy='672' opacity='0.92'%3E%3C/circle%3E%3Ccircle r='4' cx='160' cy='551' opacity='0.30'%3E%3C/circle%3E%3Ccircle r='4' cx='185' cy='212' opacity='0.49'%3E%3C/circle%3E%3Ccircle r='4' cx='519' cy='139' opacity='0.61'%3E%3C/circle%3E%3Ccircle r='4' cx='685' cy='439' opacity='0.93'%3E%3C/circle%3E%3Ccircle r='4' cx='444' cy='686' opacity='0.54'%3E%3C/circle%3E%3Ccircle r='4' cx='138' cy='525' opacity='0.38'%3E%3C/circle%3E%3Ccircle r='4' cx='204' cy='184' opacity='0.30'%3E%3C/circle%3E%3Ccircle r='4' cx='552' cy='149' opacity='0.92'%3E%3C/circle%3E%3Ccircle r='4' cx='685' cy='474' opacity='0.63'%3E%3C/circle%3E%3Ccircle r='4' cx='411' cy='695' opacity='0.26'%3E%3C/circle%3E%3Ccircle r='4' cx='119' cy='496' opacity='0.88'%3E%3C/circle%3E%3Ccircle r='4' cx='227' cy='157' opacity='0.86'%3E%3C/circle%3E%3Ccircle r='4' cx='584' cy='164' opacity='0.76'%3E%3C/circle%3E%3Ccircle r='4' cx='680' cy='509' opacity='0.62'%3E%3C/circle%3E%3Ccircle r='4' cx='376' cy='701' opacity='0.34'%3E%3C/circle%3E%3Ccircle r='4' cx='104' cy='464' opacity='0.24'%3E%3C/circle%3E%3Ccircle r='4.5' cx='253' cy='133' opacity='0.41'%3E%3C/circle%3E%3Ccircle r='4.5' cx='615' cy='182' opacity='0.29'%3E%3C/circle%3E%3Ccircle r='4.5' cx='671' cy='544' opacity='0.44'%3E%3C/circle%3E%3Ccircle r='4.5' cx='340' cy='702' opacity='0.16'%3E%3C/circle%3E%3Ccircle r='4.5' cx='92' cy='429' opacity='0.25'%3E%3C/circle%3E%3Ccircle r='4.5' cx='283' cy='112' opacity='0.54'%3E%3C/circle%3E%3Ccircle r='4.5' cx='644' cy='205' opacity='0.41'%3E%3C/circle%3E%3Ccircle r='4.5' cx='658' cy='578' opacity='0.78'%3E%3C/circle%3E%3Ccircle r='4.5' cx='303' cy='699' opacity='0.75'%3E%3C/circle%3E%3Ccircle r='4.5' cx='84' cy='393' opacity='0.50'%3E%3C/circle%3E%3Ccircle r='4.5' cx='316' cy='94' opacity='0.55'%3E%3C/circle%3E%3Ccircle r='4.5' cx='670' cy='231' opacity='0.72'%3E%3C/circle%3E%3Ccircle r='4.5' cx='640' cy='611' opacity='0.76'%3E%3C/circle%3E%3Ccircle r='4.5' cx='266' cy='692' opacity='0.56'%3E%3C/circle%3E%3Ccircle r='4.5' cx='81' cy='355' opacity='0.96'%3E%3C/circle%3E%3Ccircle r='4.5' cx='351' cy='80' opacity='0.33'%3E%3C/circle%3E%3Ccircle r='4.5' cx='694' cy='261' opacity='0.22'%3E%3C/circle%3E%3Ccircle r='4.5' cx='618' cy='642' opacity='0.49'%3E%3C/circle%3E%3Ccircle r='4.5' cx='230' cy='680' opacity='0.45'%3E%3C/circle%3E%3Ccircle r='4.5' cx='82' cy='317' opacity='0.38'%3E%3C/circle%3E%3Ccircle r='4.5' cx='389' cy='70' opacity='0.90'%3E%3C/circle%3E%3Ccircle r='4.5' cx='714' cy='294' opacity='0.81'%3E%3C/circle%3E%3Ccircle r='4.5' cx='592' cy='671' opacity='0.84'%3E%3C/circle%3E%3Ccircle r='4.5' cx='194' cy='663' opacity='0.51'%3E%3C/circle%3E%3Ccircle r='4.5' cx='88' cy='278' opacity='0.94'%3E%3C/circle%3E%3Ccircle r='4.5' cx='428' cy='65' opacity='0.17'%3E%3C/circle%3E%3Ccircle r='4.5' cx='730' cy='330' opacity='0.12'%3E%3C/circle%3E%3Ccircle r='4.5' cx='562' cy='698' opacity='0.38'%3E%3C/circle%3E%3Ccircle r='4.5' cx='161' cy='642' opacity='0.55'%3E%3C/circle%3E%3Ccircle r='4.5' cx='98' cy='239' opacity='0.63'%3E%3C/circle%3E%3Ccircle r='4.5' cx='468' cy='64' opacity='0.44'%3E%3C/circle%3E%3Ccircle r='5' cx='743' cy='368' opacity='0.57'%3E%3C/circle%3E%3Ccircle r='5' cx='529' cy='720' opacity='0.18'%3E%3C/circle%3E%3Ccircle r='5' cx='129' cy='616' opacity='0.87'%3E%3C/circle%3E%3Ccircle r='5' cx='114' cy='202' opacity='0.23'%3E%3C/circle%3E%3Ccircle r='5' cx='508' cy='68' opacity='0.15'%3E%3C/circle%3E%3Ccircle r='5' cx='750' cy='409' opacity='0.81'%3E%3C/circle%3E%3Ccircle r='5' cx='492' cy='740' opacity='0.61'%3E%3C/circle%3E%3Ccircle r='5' cx='100' cy='587' opacity='0.38'%3E%3C/circle%3E%3Ccircle r='5' cx='134' cy='165' opacity='0.10'%3E%3C/circle%3E%3Ccircle r='5' cx='549' cy='77' opacity='0.64'%3E%3C/circle%3E%3Ccircle r='5' cx='753' cy='450' opacity='0.56'%3E%3C/circle%3E%3Ccircle r='5' cx='453' cy='754' opacity='0.69'%3E%3C/circle%3E%3Ccircle r='5' cx='75' cy='553' opacity='0.58'%3E%3C/circle%3E%3Ccircle r='5' cx='159' cy='131' opacity='0.82'%3E%3C/circle%3E%3Ccircle r='5' cx='589' cy='91' opacity='0.45'%3E%3C/circle%3E%3Ccircle r='5' cx='751' cy='493' opacity='0.31'%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: right;
  display: flex;
  align-items: center;
  justify-content: center;
`;
