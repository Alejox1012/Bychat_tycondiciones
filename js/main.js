
const langSwitch = document.getElementById('languageSwitch');
const oneEl = document.querySelector('.textone');
const twoEl = document.querySelector('.texttwo');
const threeEl = document.querySelector('.texto-oculto');
const tituloone = document.querySelector('.tituloone');
const Descripcionone = document.querySelector('.Descripcionone');
const titulotwo = document.querySelector('.two');
const Descripciontwo = document.querySelector('.Dtwo');
const titulothree = document.querySelector('.titulothree');
const Descripcionthree = document.querySelector('.Descripcionthree');
const titulofour = document.querySelector('.titulofour');
const Descripcionfour = document.querySelector('.Descripcionfour');
const titulofive = document.querySelector('.titulofive');
const Descripcionfive = document.querySelector('.Descripcionfive');
const titulosix = document.querySelector('.titulosix');
const Descripcionsix = document.querySelector('.Descripcionsix');
const tituloseven = document.querySelector('.tituloseven');
const Descripcionseven = document.querySelector('.Descripcionseven');
const tituloeight = document.querySelector('.tituloeight');
const Descripcioneight = document.querySelector('.Descripcioneight');
const titulonine = document.querySelector('.titulonine');
const Descripcionnine = document.querySelector('.Descripcionnine');
const tituloten = document.querySelector('.tituloten');
const Descripcionten = document.querySelector('.Descripcionten');
const tituloeleven = document.querySelector('.tituloeleven');
const Descripcioneleven = document.querySelector('.Descripcioneleven');
const titulotwelve = document.querySelector('.titulotwelve');
const Descripciontwelve = document.querySelector('.Descripciontwelve');
const titulothirteen = document.querySelector('.titulothirteen');
const Descripcionthirteen = document.querySelector('.Descripcionthirteen');
const titulofourteen = document.querySelector('.titulofourteen');
const Descripcionfourteen = document.querySelector('.Descripcionfourteen');
const titulofiveteen = document.querySelector('.titulofiveteen');
const Descripcionfiveteen = document.querySelector('.Descripcionfiveteen');
const titulosixteen = document.querySelector('.titulosixteen');
const Descripcionsixteen = document.querySelector('.Descripcionsixteen');
const tituloseventeen = document.querySelector('.tituloseventeen');
const Descripcionseventeen = document.querySelector('.Descripcionseventeen');
const tituloeighteen = document.querySelector('.tituloeighteen');
const Descripcioneighteen = document.querySelector('.Descripcioneighteen');
const titulonineteen = document.querySelector('.titulonineteen');
const Descripcionnineteen = document.querySelector('.Descripcionnineteen');
const privacy = document.querySelector('.privacy');



const data = {
  "english": {
    "desciption": "Terms and Conditions",
    "subtitle":"Discover",
    "textocult":"Go back to the home",
    "tituloone":"<h4>1. Introduction / Basics</h4>",
    "Descripcionone":"We, at Sites Software and Services S.A.S, provide various digital and develop services and operate, among others, the APP BYCHAT. ",
    "titulotwo":"<h4>2. Scope of Application and Binding Character of the T&C, Amendments to the T&C</h4>",
    "Descripciontwo":"We offer all services exclusively on the basis of these T&C. These T&C form an integral part of each agreement concluded between us and you  the user. They also apply to services or contents which are provided by others, using our services or our app BYCHAT. When you use these services, you agree to be bound by the terms and conditions set out herein. We will inform you of any amendment to our T&C via BYCHAT or in any appropriate manner 2 months prior to the date on which the new T&C will take effect. When you have an effective agreement with us and you do not object to the scope of application of the new T&C within this period by email, you will be deemed to have accepted the new T&C. For agreements concluded after any amendment to the T&C, only the new T&C shall apply.",
    "titulothree":"<h4>3. Scope of Services, Changes to Scope of Services, Availability</h4>",
    "Descripcionthree":"Our services will only be available to you once you have registered with us. Our services include - sending and receiving messages, photos, videos and voice memos;- Mobile Instant Messaging service. Our services are described on our website or wherever they are offered or are self-explanatory. There you will find the scope, duration of the offered usage and special conditions, if any. Requesting a service from us constitutes placing a binding order with us. When we accept this order, you will receive a confirmation of acceptance from us or we will behave accordingly. When we accept your order and payment is secured, you may immediately use the services requested. Our services are subject to constant change as we want them to always be up-to-date and to be able to offer you the latest trends and features. Therefore, the services currently offered and retrievable, as well as the contents you store will not be available to an unlimited extent or for an unlimited period of time. Should we make a change within the scope of the effective contractual relationship we have with you we will inform you accordingly, complying with any stipulated notice period. ",
    "titulofour":"<h4>4. Registration</h4>",
    "Descripcionfour":" When you register with us, you will receive an account and login details consisting of user name and password. The functioning of our services depends on the information you supply being correct and up-to-date. You should to enter true, current and complete information when registering with us. You shall inform us of any change to such information, in particular the change of your mobile phone number or email. You shall not create an account for another person or create more than one personal account. We cannot guarantee the correctness and completeness of the data provided by you or other users.",
    "titulofive":"<h4>5. Authorised Usage</h4>",
    "Descripcionfive":"You shall only be entitled to use our services when you comply with the provisions of the relevant service description and of these T&C and with the applicable legal provisions. You agree to respect the privacy of other users and not to make available or transmit any unsolicited, harassing, defamatory or threatening messages, information or contents. You shall be responsible for ensuring that the recipient of a message agrees with such receipt. It is strictly prohibited to use our services for promotional purposes or any other type of use for commercial purposes. Please note that we may add advertising messages or other information to the contents of users, e.g. SMS, etc. By using our services you are stating that you consent to this. ",
    "titulosix":"<h4>6. Third Party Usage</h4>",
    "Descripcionsix":"You shall keep your login details safe and protect them against third-party access. You shall not enable third parties to use your account. You shall be held responsible each time your account is accessed, if you allow third parties to use it or if your login details are unprotected. The same applies if you are logged in automatically by your browser, mobile phone etc., and a third party subsequently gains access. Even if your account has been used by a third party, with or without your knowledge and/or your intention, you shall be held responsible for the transmission or making available of prohibited contents (Item 10) or the illegal use of our services in violation of these conditions or of applicable legal provisions. As soon as you become aware that third parties have access to your login details, you shall immediately request us to block your account. ",
    "tituloseven":"<h4>7. Grant of Rights</h4>",
    "Descripcionseven":" You may use our services to make available or transmit, either to the public or to certain persons or groups of people (e.g. based on your privacy settings), contents to which you own the rights. We are unable to prevent the contents which you make publicly available on the Internet from being retrieved, stored or processed by anyone worldwide. You shall grant us a non-exclusive, transferable, sub-licensable right of use, free of charge and without any space or time limitations, to all contents which you make publicly available using our services (e.g. photos, videos, texts, graphics, music, etc. on the Internet forum, blog, chat, histories, etc.). You may revoke any such rights; any use by us or by third parties authorised by us which has already occurred or is currently applicable shall be excluded. This grant of rights shall not apply to contents which you transmit to specified third parties or which you only make available to certain persons (e.g. based on your privacy settings) using our services.",
    "tituloeight":"<h4>8. Costs and Methods of Payment</h4>",
    "Descripcioneight":"Any services which we offer free of charge shall remain free of charge. If we make any changes in this respect we will inform you in due time, complying with any given notice period. You need Internet access and/or a mobile phone to use our services, both of which incur additional costs (e.g. in accordance with a mobile phone agreement) particularly the transfer of data via mobile Internet. These are not part of our services and you shall be responsible for these additional costs. We offer different methods of payment for some of our services. You shall not make any payments by using unauthorised means (e.g. a credit card belonging to a third party). We are not obligated to provide or render the services prior to the receipt of the fee applicable to the service, and we are entitled to withhold the service, until payment is received.  ",
    "titulonine":"<h4>9. Refunds</h4>",
    "Descripcionnine":"If you are a consumer and you have paid for services you have received, you will not be able to request a refund unless you have been a victim of card theft and you must report it to your bank.", 
    "tituloten":"<h4>10. Prohibited Contents</h4>",
    "Descripcionten":"You shall be held solely responsible for ensuring that the contents made available or transmitted by you using our services does not infringe any legal provisions or third party rights. You agree not to make available or transmit contents of pornographic, National Socialist, abusive, insulting, racist, xenophobic, defamatory, sexually degrading, blasphemous, discriminating, discrediting, politically extremist or morally reprehensible nature or such which are in violation of regulations for the protection of children and young people, personal honour, criminal law regulations, regulations under the Data Protection Act, the Trademark Protection Act or the Copyright Protection Act or other legal provisions. It is also prohibited to make available or transmit links or other information leading to such contents. As a rule, we do not check the contents made available or transmitted by you or others using our services, and we are not responsible for such contents. If we become aware of the transmission or the availability of contents in violation of legal provisions or in violation of these T&C, we will delete them or block the account used for such purpose. Should you become aware of such transmission or such contents, you shall inform us immediately. ",
    "tituloeleven":"<h4>11. Third Party Rights, Unauthorised Use</h4>",
    "Descripcioneleven":" All contents and services provided or rendered by us and the contents of other users are protected. We are entitled to rights of prohibition of use and rights of exploitation to these contents and services, either on a statutory basis (e.g. under copyright, trademark or patent law) or on a contractual basis. You may only use these contents and services in the form expressly authorised by us. You shall not pass on to others any software, pictures, ring tones, music, videos, etc. which we have provided or delivered to you, either against payment or free of charge. You shall not use our services to transmit, store or make available contents which you are not authorised to dispose of e.g. because you do not have the consent of the author or of the trademark holder.",
    "titulotwelve":"<h4> 12. Decoding</h4>",
    "Descripciontwelve":"Any change to software e.g. on your mobile phone may result in significant, unforeseen faults in its functions or the functions of other software or hardware (e.g. the mobile phone or mobile phone network). In this respect you shall bear the sole risks and responsibility. You shall not make any attempt to develop or execute programs (scripts, robots, viruses, etc.) which might change the process and functions of our services e.g. change or bypass the user interface.",
    "titulothirteen":"<h4>13. Blocking, Deletion of the Account</h4>",
    "Descripcionthirteen":"If you are in breach of the provisions of these General Terms and Conditions or if we have reasonable grounds for suspecting a breach, in particular in respect of entering incorrect data during registration, the creation of more than one account (Item 4.), use of our services to harass, threaten or insult other users (Item 5.), use of our services for promotional purposes (Item 5), third party access, with or without consent (Item 6), transmission or making available of prohibited contents (Item 10.), infringement of third party rights or attempt to manipulate our services (Items 11. and 12.), misleading statements regarding your identity, age and business activity or failure to meet payment obligations despite warnings that your account will be blocked, we shall be entitled to immediately withdraw our services, block your account and delete the contents transmitted or made available by you (e.g. User name, stories, content, photos, videos, voice notes, etc.). We are also entitled to delete your account and the services associated therewith if you do not use your account for more than 12 months. ",
    "titulofourteen":"<h4>14. Warranty and Liability</h4>",
    "Descripcionfourteen":"<h4>We assume no warranty that our services and the user contents are correct, up-to-date or suitable to fulfil a purpose expected or intended by you or a third party. We assume no warranty that the contents provided by us shall work on any other mobile phone or terminal device than the one stated by you in your purchase order or that they shall look or sound the same way as offered on our website. We assume no liability that software (games, applications, etc.) provided by other users is free of errors, or malicious programs, which may restrict the functionality of your terminal device. We shall be fully liable for any damage caused intentionally or by gross negligence. Our liability will be limited to the replacement of the foreseeable damage typical to the Agreement and to an amount of USD 200.00. This limitation does not apply to damage arising from injury to life, body or health. We shall not be liable for claims or damages arising from user violation of these T&C or legal provisions. We shall not be held liable for contents transmitted or made available using our services. ",
    "titulofiveteen":"<h4>15. Data Protection</h4>",
    "Descripcionfiveteen":" We take the protection of data stored with us seriously. We only process your personal data if this is necessary to fulfil and render our services. As a matter of principle, we shall only store and process master and traffic data which you either provide or which we have collected. When you send messages using our services, you may determine yourself whether copies thereof should be stored on your account. We will not use such contents data. You may inspect the personal data stored by us at any time, via your account. When you use our location-based services your terminal device (e.g. mobile phone) will inform us of your current location. We will process and store this information insofar as it is necessary to render the service and to show you location-based offers from our promotional partners. We will use master data stored to send you, or provide you with, individual promotional offers.  We will also use existing data we hold on you to prepare anonymous statistics used to help provide and improve our services and to control advertisements. We will delete or make anonymous your traffic data as soon as the relevant communication is completed, unless we need them for charges or are legally obliged to store them. We shall delete your master data as soon as the contractual relationship between us is terminated, no further open claims exist and we are no longer legally obliged to store the data. Our websites are used by web analysis services such as Google Analytics and Admob Mobile Analytics. These services use so-called “Cookies”, i.e. text files which will be stored on your computer and enable an analysis of your use of the website. Such information on the use of the website (including your IP address) generated by the Cookie will be transmitted to a server of this provider in the USA and stored there. Providers use such information to evaluate your use of the website to compile reports on website activity for us and to render other services associated with website and Internet use. In addition, these providers might transmit such information to third parties, if they are legally required to do so or insofar as third parties process such data on behalf of the provider. Under no circumstances will these providers connect your IP address with other data of these providers. You may prevent the installation of Cookies by using the relevant setting on your browser software.     "+
    "However, if you do so, you may not be able to access all the functions of our website. By using our services and websites, you agree to data collected about you being processed as detailed above and being used for the purposes mentioned above. You may revoke your consent to such data processing at any time, unless the data is required by us in order to provide our services.",
    "titulosixteen":"<h4>16. Disclosure of Data to Courts and Authorities</h4>",
    "Descripcionsixteen":" We are entitled to disclose to courts and authorities any master data and traffic data, as well as information we hold on you, within the framework of the legal provisions, in particular those of the Colombian Copyright Law, the Colombian Telecommunications Law and the Colombian Criminal Law. if we are requested to do so either by a court or by the authorities. We will inform the police of all criminal activities of which we become aware.",
    "tituloseventeen":"<h4>17. Termination of the Agreement</h4>",
    "Descripcionseventeen":"You may terminate at any time an existing Agreement concluded with us, by using the “Delete user” option on your account. Payments for services rendered in the scope of other subscription services shall be paid in accordance with periodic billing (e.g. every three months for the next three months in advance). You may terminate these subscription services with effect from the end of the next billing period. The right to immediate cancellation of the Agreement for compelling reasons remains unaffected. Compelling reasons are those which entitle us to block the account (Item 13) or if you default on payment of the agreed fee, despite a reminder containing a threat to block your account.",
    "tituloeighteen":"<h4>18. Indemnification</h4>",
    "Descripcioneighteen":"If you infringe these T&C or legal provisions, you shall indemnify and hold us harmless against third party claims resulting therefrom.",
    "titulonineteen":"<h4>19. Applicable Law and Place of Jurisdiction, Miscellaneous</h4>",
    "Descripcionnineteen":"If you are not a consumer, agreements deviating from these T&C will be effective only if they have been agreed in writing. Declarations which we make to you or which you make to us will be effective even if they are made by SMS or email. We will send declarations intended for you to the electronic contact address given when you registered. If one of the provisions in these T&C is, or becomes, ineffective or an omission has been made, the other provisions shall remain unaffected. If you are not a consumer the ineffective provision or omission will be replaced by an effective provision which most closely represents the economic purpose of the ineffective provision and the intention of the contractual parties.",
    "privacy":"Privacy Policy",
     },
  "spanish": {
 
    "desciption": "Terminos y condiciones",
    "subtitle":"Descubre",
    "textocult":"Regresar a la página de inicio",
    "tituloone":"<h4>1. Introducción / Conceptos básicos</h4>",
    "Descripcionone":"En Sites Software and Services S.A.S prestamos diversos servicios de Digitales y de desarrollo y gestionamos, entre otras, la app BYCHAT",
       "titulotwo":"<h4>2. Ámbito de aplicación y carácter vinculante de las T&C, modificaciones de las T&C     </h4>",
    "Descripciontwo":"Ofrecemos todos los servicios exclusivamente sobre la base de estos T&C. Estos T&C forman parte integrante de cada acuerdo celebrado entre nosotros y usted, el usuario. También se aplican a los servicios o contenidos proporcionados por terceros que utilicen nuestros servicios o nuestra app BYCHAT. Al utilizar estos servicios, usted acepta quedar vinculado por las presentes T&C. Le informaremos de cualquier modificación de nuestras T&C a través de BYCHAT o de cualquier otra forma adecuada 2 meses antes de la fecha en que las nuevas T&C entren en vigor. Cuando usted tenga un acuerdo efectivo con nosotros y no se oponga al ámbito de aplicación de las nuevas T&C dentro de este plazo por correo electrónico, se considerará que ha aceptado las nuevas T&C. Para los acuerdos celebrados después de cualquier modificación de las T&C, solo se aplicarán las nuevas T&C.",
      "titulothree":"<h4> 3. Alcance de los servicios, cambios en el alcance de los servicios, disponibilidad   </h4>",
    "Descripcionthree":"Nuestros servicios sólo estarán disponibles para usted una vez que se haya registrado con nosotros. Nuestros servicios incluyen - envío y recepción de mensajes, fotos, videos y notas de voz; - servicio de mensajería instantánea móvil. Nuestros servicios se describen en nuestro sitio web o dondequiera que se ofrezcan o sean autoexplicativos. Allí encontrará el alcance, la duración del uso ofrecido y las condiciones especiales, en su caso. La solicitud de un servicio constituye un pedido vinculante. Cuando aceptemos este pedido, recibirá una confirmación de aceptación por nuestra parte o nos comportaremos en consecuencia. Cuando aceptemos su pedido y el pago esté asegurado, podrá utilizar inmediatamente los servicios solicitados. Nuestros servicios están sujetos a cambios constantes, ya que queremos que estén siempre actualizados y poder ofrecerle las últimas tendencias y prestaciones. Por lo tanto, los servicios actualmente ofrecidos y recuperables, así como los contenidos que usted almacene no estarán disponibles de forma ilimitada ni durante un periodo de tiempo ilimitado. En caso de que realicemos algún cambio en el ámbito de la relación contractual efectiva que mantenemos con usted, le informaremos de ello respetando los plazos de preaviso estipulados.",
      "titulofour":"<h4>4. Registro</h4>",
    "Descripcionfour":"Cuando se registre con nosotros, recibirá una cuenta y unos datos de acceso consistentes en un nombre de usuario y una contraseña. El funcionamiento de nuestros servicios dependen de que la información que nos facilite sea correcta y esté actualizada. Por lo tanto, deberá introducir información veraz, actual y completa al registrarse con nosotros. Deberá informarnos de cualquier cambio en dicha información, en particular del cambio de su número de teléfono móvil o correo electrónico. No podrá crear una cuenta para otra persona ni crear más de una cuenta personal. No podemos garantizar que los datos facilitados por usted u otros usuarios sean correctos y completos.",
     "titulofive":"<h4>5. Uso autorizado</h4>",
    "Descripcionfive":"Sólo tendrá derecho a utilizar nuestros servicios cuando cumpla las disposiciones de la descripción del servicio correspondiente y de las presentes T&C, así como las disposiciones legales aplicables. Usted se compromete a respetar la privacidad de los demás usuarios y a no poner a disposición o transmitir mensajes, información o contenidos no solicitados, acosadores, difamatorios o amenazadores. Usted será responsable de que el destinatario de un mensaje acepte su recepción. Queda terminantemente prohibido utilizar nuestros servicios con fines promocionales o cualquier otro tipo de uso con fines comerciales. Tenga en cuenta que podemos añadir mensajes publicitarios u otra información a los contenidos de los usuarios, por ejemplo, SMS, etc. Al utilizar nuestros servicios usted declara que consiente en ello.",
     "titulosix":"<h4>6. Uso por terceros</h4>",
    "Descripcionsix":"Deberá mantener a salvo sus datos de acceso y protegerlos contra el acceso de terceros. No permitirá que terceros utilicen su cuenta. Usted será responsable cada vez que se acceda a su cuenta, si permite que terceros la utilicen o si sus datos de acceso no están protegidos. Lo mismo ocurre si usted inicia sesión automáticamente a través de su navegador, teléfono móvil, etc., y posteriormente un tercero obtiene acceso. Aunque su cuenta haya sido utilizada por un tercero, con o sin su conocimiento y/o su intención, usted será responsable de la transmisión o puesta a disposición de contenidos prohibidos (punto 10) o del uso ilegal de nuestros servicios en violación de estas condiciones o de las disposiciones legales aplicables. En cuanto tenga conocimiento de que terceros tienen acceso a sus datos de acceso, deberá solicitarnos inmediatamente el bloqueo de su cuenta.",
      "tituloseven":"<h4>7. Cesión de derechos</h4>",
    "Descripcionseven":"Usted puede utilizar nuestros servicios para poner a disposición o transmitir, ya sea al público o a determinadas personas o grupos de personas (por ejemplo, en función de su configuración de privacidad), contenidos sobre los que usted posee los derechos. No podemos impedir que los contenidos que usted ponga a disposición del público en Internet sean recuperados, almacenados o procesados por cualquier persona en todo el mundo. Nos concederá un derecho de uso no exclusivo, transferible y sublicenciable, gratuito y sin limitaciones de espacio o tiempo, sobre todos los contenidos que ponga a disposición del público utilizando nuestros servicios (por ejemplo, fotos, vídeos, textos, gráficos, música, etc. en el foro de Internet, blog, chat, historia, etc.). Usted podrá revocar tales derechos; cualquier uso por nuestra parte o por parte de terceros autorizados por nosotros que ya se haya producido o esté vigente quedará excluido. Esta concesión de derechos no se aplicará a los contenidos que usted transmita a terceros especificados o que sólo ponga a disposición de determinadas personas (por ejemplo, en función de su configuración de privacidad) utilizando nuestros servicios.",
    "tituloeight":"<h4>8. Costes y formas de pago</h4>",
    "Descripcioneight":"Todos los servicios que ofrecemos de forma gratuita seguirán siendo gratuitos. Si realizamos algún cambio a este respecto, le informaremos con la debida antelación, respetando cualquier plazo de preaviso. Para utilizar nuestros servicios necesita acceso a Internet y/o un teléfono móvil, y ambos conllevan costes adicionales (por ejemplo, de conformidad con un acuerdo de telefonía móvil), en particular la transferencia de datos a través de Internet móvil. Éstos no forman parte de nuestros servicios y usted será responsable de dichos costes adicionales. Ofrecemos diferentes métodos de pago para ciertos de nuestros servicios prestados. Usted no efectuará ningún pago utilizando medios no autorizados (por ejemplo, una tarjeta de crédito perteneciente a un tercero). No estamos obligados a prestar o proporcionar los servicios antes de la recepción de la tarifa aplicable al servicio, y tenemos derecho a retener el servicio, hasta que se reciba el pago. ",
       "titulonine":"<h4>9. Devoluciones</h4>",
    "Descripcionnine":"Si es usted consumidor y ha pagado por servicios que ha recibido no podrá solicitar devolución de este a menos que haya sido víctima de un robo de sus tarjetas y deberá reportarlo a su banco.",
     "tituloten":"<h4>10. Contenidos prohibidos</h4>",
    "Descripcionten":"Usted será el único responsable de que los contenidos que ponga a disposición o transmita utilizando nuestros servicios no infrinjan ninguna disposición legal ni derechos de terceros. Usted se compromete a no poner a disposición o transmitir contenidos de carácter pornográfico, nacionalsocialista, abusivo, insultante, racista, xenófobo, difamatorio, sexualmente degradante, blasfemo, discriminatorio, desacreditador, políticamente extremista o moralmente reprobable o que infrinjan la normativa de protección de la infancia y la juventud, el honor personal, la normativa penal, la normativa de la Ley de Protección de Datos, la Ley de Protección de Marcas o la Ley de Protección de los Derechos de Autor u otras disposiciones legales. También está prohibido poner a disposición o transmitir enlaces u otra información que conduzca a dichos contenidos. Por regla general, no comprobamos los contenidos puestos a disposición o transmitidos por usted u otras personas que utilizan nuestros servicios, y no somos responsables de dichos contenidos. Si tenemos conocimiento de la transmisión o puesta a disposición de contenidos que infrinjan las disposiciones legales o las presentes T&C, los eliminaremos o bloquearemos la cuenta utilizada para tal fin. Si tiene conocimiento de dicha transmisión o de dichos contenidos, deberá informarnos inmediatamente.",
      "tituloeleven":"<h4>11. Derechos de terceros, uso no autorizado</h4>",
    "Descripcioneleven":"Todos los contenidos y servicios proporcionados o prestados por nosotros y los contenidos de otros usuarios están protegidos. Nos corresponden derechos de prohibición de uso y derechos de explotación sobre estos contenidos y servicios, ya sea sobre una base legal (por ejemplo, en virtud de la legislación sobre derechos de autor, marcas o patentes) o sobre una base contractual. Sólo podrá utilizar estos contenidos y servicios en la forma expresamente autorizada por nosotros. No cederá a terceros ningún software, imagen, tono de llamada, música, vídeo, etc. que le hayamos proporcionado o entregado, ya sea a título oneroso o gratuito. No utilizará nuestros servicios para transmitir, almacenar o poner a disposición contenidos de los que no esté autorizado a disponer, por ejemplo, por no contar con el consentimiento del autor o del titular de la marca.",
    "titulotwelve":"<h4>12. Descodificación</h4>",
    "Descripciontwelve":"Cualquier cambio en el software, por ejemplo en su teléfono móvil, puede provocar fallos importantes e imprevistos en sus funciones o en las funciones de otro software o hardware (por ejemplo, el teléfono móvil o la red de telefonía móvil). A este respecto, usted será el único responsable y correrá con todos los riesgos. Usted no hará ningún intento de desarrollar o ejecutar programas (scripts, robots, virus, etc.) que puedan cambiar el proceso y las funciones de nuestros servicios, por ejemplo, cambiar o eludir la interfaz de usuario.",
     "titulothirteen":"<h4>13. Bloqueo, supresión de la cuenta</h4>",
    "Descripcionthirteen":"Si incumple las disposiciones de las presentes Condiciones Generales o si tenemos motivos razonables para sospechar un incumplimiento, en particular en lo que respecta a la introducción de datos incorrectos durante el registro, la creación de más de una cuenta (punto 4.), el uso de nuestros servicios para acosar, amenazar o insultar a otros usuarios (punto 5.), el uso de nuestros servicios con fines promocionales (punto 5.), el acceso de terceros, con o sin consentimiento (punto 6.), la transmisión o puesta a disposición de contenidos prohibidos (punto 10.), la infracción de derechos de terceros o el intento de manipular nuestros servicios (puntos 11. y 12.). ), infracción de derechos de terceros o intento de manipular nuestros servicios (puntos 11. y 12.), declaraciones engañosas sobre su identidad, edad y actividad empresarial o incumplimiento de las obligaciones de pago a pesar de las advertencias de que su cuenta será bloqueada, tendremos derecho a retirar inmediatamente nuestros servicios, bloquear su cuenta y eliminar los contenidos transmitidos o puestos a disposición por usted (por ejemplo, Nombre de usuario, historias, contenidos, fotos, videos, notas de voz, etc.). También tendremos derecho a eliminar su cuenta y los servicios asociados a la misma si no utiliza su cuenta durante más de 12 meses.",
     "titulofourteen":"<h4>14. Garantía y responsabilidad</h4>",
    "Descripcionfourteen":"No asumimos ninguna garantía de que nuestros servicios y los contenidos para el usuario sean correctos, estén actualizados o sean adecuados para cumplir una finalidad esperada o prevista por usted o un tercero. No asumimos ninguna garantía de que los contenidos proporcionados por nosotros funcionen en cualquier otro teléfono móvil o dispositivo terminal distinto del indicado por usted en su orden de compra o de que tengan el mismo aspecto o sonido que los ofrecidos en nuestro sitio web. No asumimos ninguna responsabilidad de que el software (juegos, aplicaciones, etc.) proporcionado por otros usuarios esté libre de errores, o de programas maliciosos, que puedan restringir la funcionalidad de su dispositivo terminal. Seremos plenamente responsables de cualquier daño causado intencionadamente o por negligencia grave. Nuestra responsabilidad se limitará a la reposición de los daños previsibles típicos del Acuerdo y a un importe de 200 usd.   Esta limitación no se aplica a los daños derivados de lesiones a la vida, el cuerpo o la salud. No seremos responsables de reclamaciones o daños derivados de la violación por parte del usuario de estas T&C o de disposiciones legales. No nos hacemos responsables de los contenidos transmitidos o puestos a disposición a través de nuestros servicios.",
    "titulofiveteen":"<h4>15. Protección de datos</h4>",
    "Descripcionfiveteen":"Nos tomamos muy en serio la protección de los datos almacenados con nosotros. Sólo procesamos sus datos personales si es necesario para cumplir y prestar nuestros servicios. Por principio, sólo almacenaremos y procesaremos los datos maestros y de tráfico que usted nos facilite o que nosotros hayamos recopilado. Cuando envíe mensajes utilizando nuestros servicios, usted mismo podrá determinar si deben almacenarse copias de los mismos en su cuenta. No utilizaremos dichos datos de contenido.   Usted puede inspeccionar los datos personales almacenados por nosotros en cualquier momento, a través de su cuenta. Cuando utilice nuestros servicios basados en la localización, su dispositivo terminal (por ejemplo, un teléfono móvil) nos informará de su ubicación actual. Procesaremos y almacenaremos esta información en la medida en que sea necesario para prestar el servicio y para mostrarle ofertas basadas en la localización de nuestros socios promocionales. Utilizaremos los datos maestros almacenados para enviarle o proporcionarle ofertas promocionales individuales. También utilizaremos los datos existentes que tenemos sobre usted para elaborar estadísticas anónimas utilizadas para ayudar a prestar y mejorar nuestros servicios y para controlar los anuncios publicitarios. Eliminaremos o haremos anónimos sus datos de tráfico tan pronto como finalice la comunicación correspondiente, a menos que los necesitemos para cobros o estemos legalmente obligados a almacenarlos. Eliminaremos sus datos maestros tan pronto como finalice la relación contractual entre nosotros, no existan más reclamaciones abiertas y ya no estemos legalmente obligados a almacenar los datos. Nuestros sitios web son utilizados por servicios de análisis web como Google Analytics y Admob Mobile Analytics."+"Estos servicios utilizan las denominadas -cookies-,"
    +"es decir, archivos de texto que se almacenan en su ordenador y permiten analizar el uso que usted hace del sitio web. La información sobre el uso del sitio web (incluida su dirección IP) generada por la cookie se transmitirá a un servidor de este proveedor en EE.UU. y se almacenará allí. "+"Los proveedores utilizan dicha información para evaluar su uso del sitio web, elaborar informes sobre la actividad del sitio web para nosotros y prestar otros servicios relacionados con el uso del sitio web y de Internet. Además, estos proveedores podrían transmitir dicha información a terceros, si están legalmente obligados a hacerlo o en la medida en que terceros procesen dichos datos en nombre del proveedor. En ningún caso estos proveedores conectarán su dirección IP con otros datos de estos proveedores. Usted puede impedir la instalación de Cookies mediante el correspondiente ajuste en el software de su navegador. Sin embargo, si lo hace, es posible que no pueda acceder a todas las funciones de nuestro sitio web. Al utilizar nuestros servicios y sitios web, usted acepta que los datos recogidos sobre usted sean tratados como se detalla más arriba y utilizados para los fines mencionados. Puede revocar su consentimiento a dicho tratamiento de datos en cualquier momento, a menos que los datos nos sean necesarios para prestar nuestros servicios. ",
     "titulosixteen":"<h4>16. Divulgación de datos a tribunales y autoridades</h4>",
    "Descripcionsixteen":"Tenemos derecho a revelar a tribunales y autoridades los datos maestros y los datos de tráfico, así como la información que poseemos sobre usted, en el marco de las disposiciones legales, en particular las de la Ley Colombiana de derechos de autor, la Ley Colombiana de telecomunicaciones y el Derecho penal Colombiano, si así nos lo solicita un tribunal o las autoridades. Informaremos a la policía de todas las actividades delictivas de las que tengamos conocimiento.",
     "tituloseventeen":"<h4>17. Rescisión del Acuerdo</h4>",
    "Descripcionseventeen":"Puede rescindir en cualquier momento un Acuerdo vigente celebrado con nosotros, utilizando la opción 'Eliminar usuario' de su cuenta. Los pagos por los servicios prestados en el marco de otros servicios de suscripción se abonarán de acuerdo con una facturación periódica (por ejemplo, cada tres meses por los tres meses siguientes por adelantado). Podrá rescindir estos servicios de suscripción con efectos a partir del final del siguiente periodo de facturación."
    +"\nEl derecho a la cancelación inmediata del Acuerdo por razones imperiosas no se ve afectado. Las razones imperiosas son aquellas que nos dan derecho a bloquear la cuenta (punto 13) o si usted incumple el pago de la tarifa acordada, a pesar de un recordatorio que contenga la amenaza de bloquear su cuenta.",
    "tituloeighteen":"<h4>18. Indemnización</h4>",
    "Descripcioneighteen":"Si infringe estas T&C o las disposiciones legales, deberá indemnizarnos y mantenernos indemnes frente a reclamaciones de terceros derivadas de ello.",
    "titulonineteen":"<h4>19. Ley aplicable y fuero competente, Varios</h4>",
    "Descripcionnineteen":"Si usted no es un consumidor, los acuerdos que se aparten de estas T&C sólo serán efectivos si se han acordado por escrito. Las declaraciones que le hagamos o que usted nos haga serán efectivas incluso si se realizan por SMS o correo electrónico. Le enviaremos las declaraciones destinadas a usted a la dirección electrónica de contacto que nos haya facilitado al registrarse. Si una de las disposiciones de las presentes T&C es o deviene ineficaz o se ha cometido una omisión, las demás disposiciones no se verán afectadas. Si usted no es un consumidor, la disposición ineficaz u omisión será sustituida por una disposición eficaz que represente lo más fielmente posible la finalidad económica de la disposición ineficaz y la intención de las partes contractuales.",
    "privacy":"Politicas de privacidad",
  },
};

langSwitch.addEventListener('change', function () {
  const language = langSwitch.checked ? "english" : "spanish";
  oneEl.innerHTML = data[language].desciption;
  twoEl.innerHTML = data[language].subtitle;
  threeEl.innerHTML = data[language].textocult;
  tituloone.innerHTML = data[language].tituloone;
  Descripcionone.innerHTML = data[language].Descripcionone;
  titulotwo.innerHTML = data[language].titulotwo;
  Descripciontwo.innerHTML = data[language].Descripciontwo;
  titulothree.innerHTML = data[language].titulothree;
  Descripcionthree.innerHTML = data[language].Descripcionthree;
  titulofour.innerHTML = data[language].titulofour;
  Descripcionfour.innerHTML = data[language].Descripcionfour;
  titulofive.innerHTML = data[language].titulofive;
  Descripcionfive.innerHTML = data[language].Descripcionfive;
  titulosix.innerHTML = data[language].titulosix;
  Descripcionsix.innerHTML = data[language].Descripcionsix;
  tituloseven.innerHTML = data[language].tituloseven;
  Descripcionseven.innerHTML = data[language].Descripcionseven;
  tituloeight.innerHTML = data[language].tituloeight;
  Descripcioneight.innerHTML = data[language].Descripcioneight;
  titulonine.innerHTML = data[language].titulonine;
  Descripcionnine.innerHTML = data[language].Descripcionnine;
  tituloten.innerHTML = data[language].tituloten;
  Descripcionten.innerHTML = data[language].Descripcionten;
  tituloeleven.innerHTML = data[language].tituloeleven;
  Descripcioneleven.innerHTML = data[language].Descripcioneleven;
  titulotwelve.innerHTML = data[language].titulotwelve;
  Descripciontwelve.innerHTML = data[language].Descripciontwelve;
  titulothirteen.innerHTML = data[language].titulothirteen;
  Descripcionthirteen.innerHTML = data[language].Descripcionthirteen;
  titulofourteen.innerHTML = data[language].titulofourteen;
  Descripcionfourteen.innerHTML = data[language].Descripcionfourteen;
  titulofiveteen.innerHTML = data[language].titulofiveteen;
  Descripcionfiveteen.innerHTML = data[language].Descripcionfiveteen;
  titulosixteen.innerHTML = data[language].titulosixteen;
  Descripcionsixteen.innerHTML = data[language].Descripcionsixteen;
  tituloseventeen.innerHTML = data[language].tituloseventeen;
  Descripcionseventeen.innerHTML = data[language].Descripcionseventeen;
  tituloeighteen.innerHTML = data[language].tituloeighteen;
  Descripcioneighteen.innerHTML = data[language].Descripcioneighteen;
  titulonineteen.innerHTML = data[language].titulonineteen;
  Descripcionnineteen.innerHTML = data[language].Descripcionnineteen;
  privacy.innerHTML = data[language].privacy;
 
});







// Selecciona el elemento con el ID "celulares"
const celulares = document.getElementById('celulares');

// Función que se ejecuta cuando se hace scroll en la página
window.addEventListener('scroll', () => {
  // Obtiene la posición vertical actual del scroll
  const scrollPosition = window.scrollY;

  // Calcula la rotación en función de la posición del scroll (ajusta según tus necesidades)
  const rotation = scrollPosition / 10; // Puedes ajustar la velocidad de rotación aquí

  // Aplica la rotación a la imagen
  celulares.style.transform = `rotate(${rotation}deg)`;
});


const header = document.querySelector('header');
const lineImages = document.querySelectorAll('.line-img');
const item4 = document.getElementById('item4'); // Agregamos la referencia al elemento con ID 'item4'

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    // Cuando el usuario hace scroll hacia abajo
    header.classList.add('header-hide');
    // Agrega la clase para contraer las imágenes
    lineImages.forEach((img) => {
      img.classList.add('contract');
    });
    item4.style.opacity = '0.2'; // Cambia la opacidad de #item4 a 0.2
  } else {
    // Cuando el usuario está en la parte superior
    header.classList.remove('header-hide');
    // Elimina la clase que contrae las imágenes
    lineImages.forEach((img) => {
      img.classList.remove('contract');
    });
    item4.style.opacity = '0'; // Restaura la opacidad de #item4 a 1 (completamente opaco)
  }
});




document.addEventListener('DOMContentLoaded', function () {
  const menu = document.getElementById('menu');
  const items = [];

  // Generar elementos con enlaces
  const links = [
    { label: 'Introduc-on / Basics', href: '#uno' },
    { label: 'Scope of App ', href: '#dos' },
    { label: 'Scope of Services', href: '#tres' },
    { label: 'Registration', href: '#cuatro' },
    { label: 'Authorised Usage', href: '#cinco' },
    { label: 'Third Party Usage', href: '#seis' },
    { label: 'Grant of Rights', href: '#siete' },
    { label: 'Costs and Methods of Payment', href: '#ocho' },
    { label: 'Refunds', href: '#nueve' },
    { label: 'Prohibited Contents', href: '#diez' },
    { label: 'Unauthorised Use', href: '#once' },
    { label: 'Decoding', href: '#doce' },
    // ... Puedes agregar más enlaces según sea necesario
  ];

  links.forEach(linkData => {
    const item = document.createElement('div');
    item.classList.add('item');
    const link = document.createElement('a');
    link.textContent = linkData.label;
    link.href = linkData.href;
    item.appendChild(link);
    items.push(item);
  });

  // Mostrar solo los primeros 5 elementos
  items.slice(0, 8).forEach(item => {
    menu.appendChild(item);
  });

  // Función para mostrar los siguientes 5 elementos
  function showNextItems() {
    const startIndex = items.findIndex(item => item.parentElement === menu);
    const endIndex = startIndex + 8;
    if (endIndex < items.length) {
      menu.innerHTML = '';
      items.slice(startIndex + 1, endIndex + 1).forEach(item => {
        menu.appendChild(item);
      });
    }
  }

  // Función para mostrar los elementos anteriores
  function showPreviousItems() {
    const startIndex = items.findIndex(item => item.parentElement === menu);
    const endIndex = startIndex + 8;
    if (startIndex > 0) {
      menu.innerHTML = '';
      items.slice(startIndex - 1, endIndex - 1).forEach(item => {
        menu.appendChild(item);
      });
    }
  }

  // Agregar eventos para desplazar hacia abajo
  document.getElementById('scroll-down').addEventListener('click', showNextItems);

  // Agregar eventos para desplazar hacia arriba
  document.getElementById('scroll-up').addEventListener('click', showPreviousItems);
});






