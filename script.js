/**

- ============================================================
- UPSKILL ACADEMY — script.js
- © Copyright by Sara Manoochehri
- 5 Module × 15 Fragen × 3 Sprachen (DE / EN / ES)
- Alle Event-Listener werden nach DOMContentLoaded gesetzt.
- ============================================================
  */

/* ============================================================
SECTION 1 – TRANSLATIONS
============================================================ */
const TR = {
de: {
navHome:‘Home’, navWhat:‘Was ist UA’, navTopics:‘Themen’,
navCert:‘Zertifikat’, navAbout:‘Über mich’, navLogin:‘Anmelden’, langLabel:‘Sprache’,
heroBadge:‘Interaktives Lernen’, heroTitle:‘Academy’,
heroDesc:‘Interaktive Lernplattform für HR, Gehaltsabrechnung und mehr – auch am Smartphone.’,
heroQuiz:‘🚀 Zum Quiz’, heroMore:‘Mehr erfahren’,
featLabel:‘Warum Upskill Academy?’, featTitle:‘Lernen, das wirklich funktioniert’,
featSub:‘Entwickelt für Kursteilnehmer in Weiterbildungsprogrammen.’,
f1T:‘Sofortiges Feedback’, f1P:‘Nach jeder Antwort siehst du direkt ob du richtig lagst.’,
f2T:‘Lernen unterwegs’,    f2P:‘Optimiert für Smartphone und Tablet.’,
f3T:‘Praxisnah’,           f3P:‘Echte Inhalte aus Weiterbildungskursen.’,
f4T:‘Persönliche Urkunde’, f4P:‘Zertifikat nach Abschluss.’,
s1:‘Fragen gesamt’, s2:‘Sprachen’, s3:‘Module’, s4:‘Gratis starten’,
apLabel:‘Die Plattform’, apTitle:‘Was ist Upskill Academy?’,
apSub:‘Interaktive Lernapp für Weiterbildungskurse.’,
st1T:‘Quiz-basiertes Lernen’, st1P:‘Lerne durch gezielte Fragen und Antworten.’,
st2T:‘Sofortiges Feedback’,   st2P:‘Verstehe warum eine Antwort richtig oder falsch ist.’,
st3T:‘Stufensystem’,          st3P:‘Von Grundlagen bis Expertenlevel.’,
st4T:‘Drei Sprachen’,         st4P:‘DE, EN und ES.’,
st5T:‘Barrierefreies Lernen’, st5P:‘Screenreader, Tastatur, Dunkel-Modus für alle.’,
advTitle:‘Deine Vorteile’,
av1T:‘Interaktiv’, av1P:‘Aktives Lernen.’,
av2T:‘Praxisnah’,  av2P:‘Echte Kursinhalte.’,
av3T:‘Sofortig’,   av3P:‘Zur Prüfungsvorbereitung.’,
topLabel:‘Lernbereiche’, topTitle:‘Wähle dein Thema’,
topSub:‘5 Module mit je 15 Fragen – perfekt zur Prüfungsvorbereitung.’,
soon:‘Demnächst’,
backTop:‘← Zurück zu Themen’, backMod:‘← Zurück zu Modulen’, qPill:‘Frage’,
errNoAnswer:‘Bitte wähle eine Antwort aus.’,
certLabel:‘Abschluss’, certTitle:‘Dein Zertifikat’, certSub:‘Zertifikate nach Leistung.’,
ct0T:‘Teilnahme’, ct0P:‘Unter 50%’,
ct1T:‘Bestanden’,  ct1P:‘50–74%’,
ct2T:‘Mit Auszeichnung’,   ct2P:‘75–99%’,
ct3T:‘Höchstauszeichnung’, ct3P:‘100% – Perfekt!’,
premH:‘Premium Download’,
premP:‘Teilen ist kostenlos. PDF-Download nach Registrierung.’,
premBtn:‘Jetzt registrieren’,
amLabel:‘Gründerin’,
amBio:‘Gebürtige Iranerin, aufgewachsen in Deutschland, lebt heute auf Teneriffa.’,
amQuote:’„Ich habe einen HR-Kurs auf Spanisch gemacht. Wie cool wäre es, das am Handy zu lernen und direkt abgefragt zu werden. Und hier sind wir.”’,
amMiss:‘Upskill Academy macht Lernen einfacher – langfristig für Kurscenter wie CEP Norte.’,
shareT:‘🎉 Ergebnis teilen’, shareCopy:‘📋 Kopieren’,
certHint:‘🔒 Registriere dich, um deine Urkunde als PDF herunterzuladen.’,
certRegBtn:‘Jetzt registrieren’,
lblCertName:‘📝 Dein Name für die Urkunde:’, namePH:‘Vollständiger Name…’,
btnRetry:‘🔄 Nochmal’, btnDL:‘📜 Urkunde herunterladen’, btnOvr:‘🏛️ Übersicht’,
dashLabel:‘Mein Bereich’, dashTitle:‘Mein Lernfortschritt’,
dashQ:‘Quizzes’, dashC:‘Urkunden’,
dashMyCerts:‘Meine Urkunden’, noCerts:‘Noch keine Urkunden. Starte ein Quiz!’,
dashAchiev:‘Errungenschaften’, dashProg:‘Lernfortschritt’, btnLogout:‘Abmelden’,
legalLabel:‘Rechtliches’, legalTitle:‘AGB & Datenschutz’,
tabImp:‘Impressum’, tabDSde:‘Datenschutz (DE)’, tabDSes:‘Privacidad (ES)’,
footDesc:‘Interaktives Lernen für HR & Administration.’,
footNav:‘Navigation’, footLegal:‘AGB & Rechtliches’, footRights:‘Alle Rechte vorbehalten’,
authSub:‘Fortschritt speichern & Urkunden herunterladen’,
tabLogin:‘Anmelden’, tabReg:‘Registrieren’,
lEmail:‘E-Mail’, lPW:‘Passwort’, lName:‘Name’,
pwNote:‘Mindestens 8 Zeichen.’, doLogin:‘Anmelden’, doReg:‘Konto erstellen’,
orWith:‘oder’, regTerms:‘Mit der Registrierung stimmst du unserer Datenschutzerklärung zu.’,
qLabel:‘FRAGE’, qOf:‘von’, qNext:‘Weiter →’,
qRight:‘✅ Richtig!’, qWrong:‘❌ Falsch.’,
lCorr:‘Richtig’, lWrong:‘Falsch’, lPct:‘Quote’,
ranks:[‘Praktikant’,‘HR-Assistent’,‘Sachbearbeiter’,‘HR-Specialist’,‘HR-Analyst’,‘HR Business Partner’,‘HR-Manager’],
difficulties:[‘Grundlagen’,‘Aufbau’,‘Profi’,‘Experte’],
rankUp:‘🎉 Rang-Aufstieg! Du bist jetzt:’, rankNow:‘Du bist jetzt:’,
bestMed:‘Beste Medaille:’, qInfo:‘15 Fragen ·’, prevLvl:‘Vorheriges Level abschließen’,
lockedMsg:‘🔒 Schließe zuerst das vorherige Level ab!’,
noName:‘✏️ Bitte gib deinen Namen ein!’, dlOk:‘📜 Urkunde heruntergeladen!’,
resultT:[‘Versuch es nochmal 💪’,‘Bestanden! 👍’,‘Sehr gut! 👏’,‘Hervorragend! 🎉’],
ratings:[‘🌱 Anfänger (0–7)’,‘📈 Fortgeschritten (8–11)’,‘🏆 Profi (12–15)’],
certTiers:[
{min:0,  max:49,  title:‘Teilnahmeurkunde’,            medal:‘📜’},
{min:50, max:74,  title:‘Urkunde – Bestanden’,         medal:‘🥉’},
{min:75, max:99,  title:‘Urkunde – Mit Auszeichnung’,  medal:‘🥈’},
{min:100,max:100, title:‘Urkunde – Höchstauszeichnung’,medal:‘🏆’},
],
certHereby:‘hat erfolgreich am Quiz’,
certComp:‘der Upskill Academy teilgenommen und’,
certScored:‘der Fragen korrekt beantwortet.’,
certSign:‘Ausgestellt von’, certDate:‘Datum’,
moduleNames:[
‘Módulo 1 – Dirección Estratégica RRHH’,
‘Módulo 2 – Procesos de RRHH’,
‘Módulo 3 – Política Retributiva’,
‘Módulo 4 – PRL y Formación’,
‘Módulo 5 – Legislación Laboral’,
],
moduleShort:[‘Estrategia’,‘Procesos’,‘Retribución’,‘PRL & Formación’,‘Legislación’],
moduleDesc:[
‘Strategische HR-Ausrichtung, Wettbewerbsvorteil, Planung & Struktur.’,
‘Rekrutierung, Onboarding, Leistungsbeurteilung & Entwicklung.’,
‘Gehaltsstrukturen, Anreize, variable Vergütung & Sozialleistungen.’,
‘Arbeitssicherheit, Prävention & Ausbildungsplanung.’,
‘Arbeitsrecht, Tarifverträge, Kündigungsschutz & Sozialversicherung.’,
],
moduleEmoji:[‘🧭’,‘⚙️’,‘💰’,‘🦺’,‘⚖️’],
},

en: {
navHome:‘Home’, navWhat:‘About UA’, navTopics:‘Topics’,
navCert:‘Certificate’, navAbout:‘About me’, navLogin:‘Sign in’, langLabel:‘Language’,
heroBadge:‘Interactive Learning’, heroTitle:‘Academy’,
heroDesc:‘Interactive learning platform for HR, payroll and more – on your smartphone.’,
heroQuiz:‘🚀 Go to Quiz’, heroMore:‘Learn more’,
featLabel:‘Why Upskill Academy?’, featTitle:‘Learning that actually works’,
featSub:‘Built for continuing education students.’,
f1T:‘Instant Feedback’,    f1P:‘After every answer you know immediately.’,
f2T:‘Learn on the go’,     f2P:‘Optimised for smartphone and tablet.’,
f3T:‘Practical’,           f3P:‘Real content from training courses.’,
f4T:‘Personal Certificate’,f4P:‘Certificate after completion.’,
s1:‘Questions total’, s2:‘Languages’, s3:‘Modules’, s4:‘Free to start’,
apLabel:‘The Platform’, apTitle:‘What is Upskill Academy?’,
apSub:‘Interactive learning app for continuing education.’,
st1T:‘Quiz-based learning’, st1P:‘Learn through targeted Q&A.’,
st2T:‘Instant feedback’,    st2P:‘Understand why an answer is right or wrong.’,
st3T:‘Level system’,        st3P:‘From basics to expert.’,
st4T:‘Three languages’,     st4P:‘DE, EN and ES.’,
st5T:‘Accessible learning’, st5P:‘Screen reader, keyboard, dark mode for everyone.’,
advTitle:‘Your benefits’,
av1T:‘Interactive’, av1P:‘Active learning.’,
av2T:‘Practical’,   av2P:‘Real course content.’,
av3T:‘Instant’,     av3P:‘Perfect for exam prep.’,
topLabel:‘Learning areas’, topTitle:‘Choose your topic’,
topSub:‘5 modules with 15 questions each – perfect exam preparation.’,
soon:‘Coming soon’,
backTop:‘← Back to topics’, backMod:‘← Back to modules’, qPill:‘Question’,
errNoAnswer:‘Please select an answer.’,
certLabel:‘Completion’, certTitle:‘Your Certificate’, certSub:‘Certificates graded by performance.’,
ct0T:‘Participation’,      ct0P:‘Under 50%’,
ct1T:‘Passed’,             ct1P:‘50–74%’,
ct2T:‘With Distinction’,   ct2P:‘75–99%’,
ct3T:‘Highest Distinction’,ct3P:‘100% – Perfect!’,
premH:‘Premium Download’,
premP:‘Sharing is free. PDF download after registration.’,
premBtn:‘Register now’,
amLabel:‘Founder’,
amBio:‘Born in Iran, raised in Germany, living in Tenerife.’,
amQuote:’“I did an HR training course in Spanish. How cool would it be to learn on my phone and get quizzed on the topics. And here we are.”’,
amMiss:‘Upskill Academy makes learning simpler – long-term for course centres like CEP Norte.’,
shareT:‘🎉 Share your result’, shareCopy:‘📋 Copy’,
certHint:‘🔒 Register to download your certificate as PDF.’,
certRegBtn:‘Register now’,
lblCertName:‘📝 Your name for the certificate:’, namePH:‘Full name…’,
btnRetry:‘🔄 Try again’, btnDL:‘📜 Download Certificate’, btnOvr:‘🏛️ Overview’,
dashLabel:‘My area’, dashTitle:‘My Learning Progress’,
dashQ:‘Quizzes’, dashC:‘Certs’,
dashMyCerts:‘My Certificates’, noCerts:‘No certificates yet. Start a quiz!’,
dashAchiev:‘Achievements’, dashProg:‘Learning Progress’, btnLogout:‘Sign out’,
legalLabel:‘Legal’, legalTitle:‘Terms & Privacy’,
tabImp:‘Legal Notice’, tabDSde:‘Privacy (DE)’, tabDSes:‘Privacidad (ES)’,
footDesc:‘Interactive learning for HR & Administration.’,
footNav:‘Navigation’, footLegal:‘Legal’, footRights:‘All rights reserved’,
authSub:‘Save progress & download certificates’,
tabLogin:‘Sign in’, tabReg:‘Register’,
lEmail:‘Email’, lPW:‘Password’, lName:‘Name’,
pwNote:‘At least 8 characters.’, doLogin:‘Sign in’, doReg:‘Create account’,
orWith:‘or’, regTerms:‘By registering you agree to our privacy policy.’,
qLabel:‘QUESTION’, qOf:‘of’, qNext:‘Next →’,
qRight:‘✅ Correct!’, qWrong:‘❌ Wrong.’,
lCorr:‘Correct’, lWrong:‘Wrong’, lPct:‘Score’,
ranks:[‘Intern’,‘HR Assistant’,‘Administrator’,‘HR Specialist’,‘HR Analyst’,‘HR Business Partner’,‘HR Manager’],
difficulties:[‘Fundamentals’,‘Intermediate’,‘Advanced’,‘Expert’],
rankUp:‘🎉 Rank up! You are now:’, rankNow:‘You are now:’,
bestMed:‘Best medal:’, qInfo:‘15 questions ·’, prevLvl:‘Complete previous level first’,
lockedMsg:‘🔒 Complete the previous level first!’,
noName:‘✏️ Please enter your name!’, dlOk:‘📜 Certificate downloaded!’,
resultT:[‘Try again 💪’,‘Passed! 👍’,‘Well done! 👏’,‘Outstanding! 🎉’],
ratings:[‘🌱 Beginner (0–7)’,‘📈 Intermediate (8–11)’,‘🏆 Pro (12–15)’],
certTiers:[
{min:0,  max:49,  title:‘Certificate of Participation’,   medal:‘📜’},
{min:50, max:74,  title:‘Certificate – Passed’,           medal:‘🥉’},
{min:75, max:99,  title:‘Certificate – With Distinction’, medal:‘🥈’},
{min:100,max:100, title:‘Certificate – Highest Distinction’,medal:‘🏆’},
],
certHereby:‘has successfully participated in the quiz’,
certComp:‘of Upskill Academy and answered’,
certScored:‘questions correctly.’,
certSign:‘Issued by’, certDate:‘Date’,
moduleNames:[
‘Module 1 – Strategic HR Management’,
‘Module 2 – HR Processes’,
‘Module 3 – Compensation Policy’,
‘Module 4 – OHS & Training’,
‘Module 5 – Labour Law’,
],
moduleShort:[‘Strategy’,‘Processes’,‘Compensation’,‘OHS & Training’,‘Labour Law’],
moduleDesc:[
‘Strategic HR alignment, competitive advantage, planning & structure.’,
‘Recruitment, onboarding, performance management & development.’,
‘Salary structures, incentives, variable pay & benefits.’,
‘Occupational health, prevention & training planning.’,
‘Labour law, collective agreements, dismissal & social insurance.’,
],
moduleEmoji:[‘🧭’,‘⚙️’,‘💰’,‘🦺’,‘⚖️’],
},

es: {
navHome:‘Inicio’, navWhat:‘Qué es UA’, navTopics:‘Temas’,
navCert:‘Certificado’, navAbout:‘Sobre mí’, navLogin:‘Acceder’, langLabel:‘Idioma’,
heroBadge:‘Aprendizaje interactivo’, heroTitle:‘Academy’,
heroDesc:‘Plataforma de aprendizaje interactiva para RRHH, nóminas y más – en tu smartphone.’,
heroQuiz:‘🚀 Al Quiz’, heroMore:‘Saber más’,
featLabel:’¿Por qué Upskill Academy?’, featTitle:‘Aprendizaje que funciona de verdad’,
featSub:‘Para estudiantes de cursos de formación continua.’,
f1T:‘Feedback inmediato’,  f1P:‘Tras cada respuesta sabes si acertaste.’,
f2T:‘Aprende en movimiento’,f2P:‘Optimizado para smartphone y tablet.’,
f3T:‘Práctico’,             f3P:‘Contenido real de cursos de formación.’,
f4T:‘Certificado personal’, f4P:‘Certificado al completar.’,
s1:‘Preguntas totales’, s2:‘Idiomas’, s3:‘Módulos’, s4:‘Empieza gratis’,
apLabel:‘La plataforma’, apTitle:’¿Qué es Upskill Academy?’,
apSub:‘App de aprendizaje interactiva para formación continua.’,
st1T:‘Aprendizaje por quiz’, st1P:‘Aprende con preguntas y respuestas.’,
st2T:‘Feedback inmediato’,   st2P:‘Entiende por qué una respuesta es correcta.’,
st3T:‘Sistema de niveles’,   st3P:‘De principiante a experto.’,
st4T:‘Tres idiomas’,         st4P:‘DE, EN y ES.’,
st5T:‘Aprendizaje accesible’,st5P:‘Lector de pantalla, teclado, modo oscuro para todos.’,
advTitle:‘Tus ventajas’,
av1T:‘Interactivo’, av1P:‘Aprendizaje activo.’,
av2T:‘Práctico’,    av2P:‘Contenido real.’,
av3T:‘Inmediato’,   av3P:‘Para preparar exámenes.’,
topLabel:‘Áreas de aprendizaje’, topTitle:‘Elige tu tema’,
topSub:‘5 módulos con 15 preguntas cada uno – perfecta preparación para el examen.’,
soon:‘Próximamente’,
backTop:‘← Volver a temas’, backMod:‘← Volver a módulos’, qPill:‘Pregunta’,
errNoAnswer:‘Por favor, selecciona una respuesta.’,
certLabel:‘Finalización’, certTitle:‘Tu Certificado’, certSub:‘Certificados según rendimiento.’,
ct0T:‘Participación’,   ct0P:‘Menos del 50%’,
ct1T:‘Aprobado’,        ct1P:‘50–74%’,
ct2T:‘Con distinción’,  ct2P:‘75–99%’,
ct3T:‘Máxima distinción’,ct3P:‘100% – ¡Perfecto!’,
premH:‘Descarga Premium’,
premP:‘Compartir es gratis. PDF tras registro.’,
premBtn:‘Regístrate’,
amLabel:‘Fundadora’,
amBio:‘De origen iraní, criada en Alemania, vive en Tenerife.’,
amQuote:’“Hice un curso de RRHH en español. ¡Qué genial sería aprender en el móvil y que me preguntaran! Y aquí estamos.”’,
amMiss:‘Upskill Academy hace el aprendizaje más sencillo – a largo plazo para centros como CEP Norte.’,
shareT:‘🎉 Compartir resultado’, shareCopy:‘📋 Copiar’,
certHint:‘🔒 Regístrate para descargar tu diploma en PDF.’,
certRegBtn:‘Registrarse’,
lblCertName:‘📝 Tu nombre para el diploma:’, namePH:‘Nombre completo…’,
btnRetry:‘🔄 Reintentar’, btnDL:‘📜 Descargar Diploma’, btnOvr:‘🏛️ Inicio’,
dashLabel:‘Mi área’, dashTitle:‘Mi progreso de aprendizaje’,
dashQ:‘Quizzes’, dashC:‘Diplomas’,
dashMyCerts:‘Mis Diplomas’, noCerts:‘Sin diplomas. ¡Empieza un quiz!’,
dashAchiev:‘Logros’, dashProg:‘Progreso’, btnLogout:‘Cerrar sesión’,
legalLabel:‘Legal’, legalTitle:‘AGB y Privacidad’,
tabImp:‘Aviso legal’, tabDSde:‘Datenschutz (DE)’, tabDSes:‘Privacidad (ES)’,
footDesc:‘Aprendizaje interactivo para RRHH y administración.’,
footNav:‘Navegación’, footLegal:‘Legal’, footRights:‘Todos los derechos reservados’,
authSub:‘Guarda progreso y descarga diplomas’,
tabLogin:‘Acceder’, tabReg:‘Registrarse’,
lEmail:‘Correo’, lPW:‘Contraseña’, lName:‘Nombre’,
pwNote:‘Mínimo 8 caracteres.’, doLogin:‘Acceder’, doReg:‘Crear cuenta’,
orWith:‘o’, regTerms:‘Al registrarte aceptas nuestra política de privacidad.’,
qLabel:‘PREGUNTA’, qOf:‘de’, qNext:‘Siguiente →’,
qRight:‘✅ ¡Correcto!’, qWrong:‘❌ Incorrecto.’,
lCorr:‘Correctas’, lWrong:‘Incorrectas’, lPct:‘Porcentaje’,
ranks:[‘Becario’,‘Asistente RRHH’,‘Administrativo’,‘Especialista RRHH’,‘Analista RRHH’,‘HR Business Partner’,‘HR Manager’],
difficulties:[‘Fundamentos’,‘Intermedio’,‘Avanzado’,‘Experto’],
rankUp:‘🎉 ¡Subida de rango! Ahora eres:’, rankNow:‘Ahora eres:’,
bestMed:‘Mejor medalla:’, qInfo:‘15 preguntas ·’, prevLvl:‘Completa el nivel anterior’,
lockedMsg:‘🔒 ¡Completa primero el nivel anterior!’,
noName:‘✏️ Introduce tu nombre.’, dlOk:‘📜 ¡Diploma descargado!’,
resultT:[’¡Inténtalo de nuevo! 💪’,’¡Aprobado! 👍’,’¡Muy bien! 👏’,’¡Excelente! 🎉’],
ratings:[‘🌱 Principiante (0–7)’,‘📈 Intermedio (8–11)’,‘🏆 Profesional (12–15)’],
certTiers:[
{min:0,  max:49,  title:‘Certificado de Participación’, medal:‘📜’},
{min:50, max:74,  title:‘Certificado – Aprobado’,       medal:‘🥉’},
{min:75, max:99,  title:‘Certificado – Con distinción’, medal:‘🥈’},
{min:100,max:100, title:‘Certificado – Máxima distinción’,medal:‘🏆’},
],
certHereby:‘ha participado exitosamente en el quiz’,
certComp:‘de Upskill Academy y ha respondido’,
certScored:‘de las preguntas correctamente.’,
certSign:‘Emitido por’, certDate:‘Fecha’,
moduleNames:[
‘Módulo 1 – Dirección Estratégica RRHH’,
‘Módulo 2 – Procesos de RRHH’,
‘Módulo 3 – Política Retributiva’,
‘Módulo 4 – PRL y Formación’,
‘Módulo 5 – Legislación Laboral’,
],
moduleShort:[‘Estrategia’,‘Procesos’,‘Retribución’,‘PRL & Formación’,‘Legislación’],
moduleDesc:[
‘Dirección estratégica, ventaja competitiva, planificación y estructura de RRHH.’,
‘Reclutamiento, onboarding, evaluación del desempeño y desarrollo de personas.’,
‘Estructuras salariales, incentivos, retribución variable y beneficios sociales.’,
‘Seguridad laboral, prevención de riesgos y planificación de la formación.’,
‘Derecho laboral, convenios colectivos, despido y seguridad social.’,
],
moduleEmoji:[‘🧭’,‘⚙️’,‘💰’,‘🦺’,‘⚖️’],
},
};

/* ============================================================
SECTION 2 – QUESTION DATABASE
5 módulos × 15 preguntas (en español – idioma de estudio)
============================================================ */
const QDB = [

/* ── MÓDULO 0: Dirección Estratégica de RRHH ── */
[
{q:’¿Qué es la Dirección Estratégica de RRHH?’,
a:[‘Solo administrar nóminas’,‘Integrar la gestión de personas en la estrategia empresarial’,‘Contratar personal temporal’,‘Gestionar solo ausencias’],
correct:1, exp:‘La Dirección Estratégica integra la gestión de personas en el núcleo de la estrategia corporativa.’},
{q:’¿De dónde surge toda estrategia de RRHH?’,
a:[‘Del deseo del director de personal’,‘De la estrategia corporativa de la empresa’,‘De los requisitos legales’,‘De las tendencias del mercado’],
correct:1, exp:‘Toda estrategia de RRHH parte de la estrategia corporativa; RRHH debe entender el modelo de negocio.’},
{q:’¿Qué caracteriza la Etapa 1 – Administración de Personal?’,
a:[‘Es proactiva y analítica’,‘Es reactiva: solo gestiona contratos y nóminas’,‘Planifica el talento a largo plazo’,‘Utiliza People Analytics’],
correct:1, exp:‘La Etapa 1 es reactiva: RRHH espera los problemas, gestiona contratos y nóminas sin anticiparse.’},
{q:’¿Qué significa ser “reactivo” en RRHH?’,
a:[‘Actuar antes de que surja el problema’,‘Actuar solo cuando el problema ya ha ocurrido’,‘Analizar datos para tomar decisiones’,‘Planificar estratégicamente el talento’],
correct:1, exp:‘Reactivo significa actuar solo cuando algo falla, sin planificar ni anticipar.’},
{q:’¿Qué ejemplo típico corresponde a RRHH en Etapa 1?’,
a:[‘Usar People Analytics’,‘Participar en la estrategia corporativa’,‘Buscar sustituto solo cuando un empleado ya se ha ido’,‘Realizar encuestas de clima’],
correct:2, exp:‘En Etapa 1, RRHH comienza la búsqueda de sustitutos solo tras la salida del empleado.’},
{q:’¿Qué aporta la Etapa 2 frente a la Etapa 1?’,
a:[‘Menos tareas y más burocracia’,‘Funciones especializadas: selección, formación, motivación’,‘Integración estratégica completa’,‘Automatización total de los procesos’],
correct:1, exp:‘Etapa 2 incorpora funciones especializadas pero RRHH aún no participa en la estrategia.’},
{q:’¿Qué caracteriza la Etapa 3 – Dirección Estratégica?’,
a:[‘RRHH solo gestiona nóminas’,‘RRHH es departamento clave que participa en la dirección empresarial’,‘RRHH trabaja exclusivamente con sindicatos’,‘RRHH gestiona el marketing’],
correct:1, exp:‘En Etapa 3, RRHH es proactivo, analítico y participa en la toma de decisiones empresariales.’},
{q:’¿Qué tecnologías impulsan la evolución hacia un RRHH estratégico?’,
a:[‘Fax e impresoras’,‘Digitalización, teletrabajo, automatización e Inteligencia Artificial’,‘Solo redes sociales’,‘Solo el almacenamiento en la nube’],
correct:1, exp:‘Digitalización, teletrabajo, automatización e IA son los principales impulsores del RRHH estratégico.’},
{q:’¿Qué es People Analytics?’,
a:[‘Software de gestión de nóminas’,‘Análisis de datos de personas para tomar decisiones basadas en evidencia’,‘Proceso de reclutamiento externo’,‘Método de teambuilding’],
correct:1, exp:‘People Analytics aplica el análisis de datos a la gestión de personas para mejorar decisiones.’},
{q:’¿Qué debe prever RRHH ante una expansión internacional?’,
a:[‘Solo más material de oficina’,‘Perfiles con idiomas, competencias interculturales y políticas de movilidad’,‘Despedir a empleados actuales’,‘Solo ajustar las estructuras salariales’],
correct:1, exp:‘RRHH debe anticipar necesidades de idiomas, competencias interculturales y políticas de movilidad.’},
{q:’¿Cuál es el objetivo principal de alinear RRHH con la estrategia?’,
a:[‘Reducir costes al mínimo’,‘Asegurar que las personas impulsen la ventaja competitiva de la empresa’,‘Gestionar solo las bajas laborales’,‘Controlar la asistencia de los empleados’],
correct:1, exp:‘Alinear RRHH con la estrategia garantiza que las personas sean fuente de ventaja competitiva.’},
{q:’¿Qué diferencia al HR Business Partner (HRBP) de un generalista?’,
a:[‘El HRBP solo gestiona nóminas’,‘El HRBP actúa como consultor estratégico de una unidad de negocio’,‘No existe ninguna diferencia’,‘El HRBP gestiona únicamente la selección’],
correct:1, exp:‘El HRBP es un especialista de RRHH que actúa como socio estratégico de una unidad de negocio.’},
{q:’¿Qué es la ventaja competitiva basada en personas?’,
a:[‘Pagar salarios más bajos que la competencia’,‘Contar con personas difíciles de imitar, bien organizadas y sostenibles en el tiempo’,‘Usar más tecnología que los competidores’,‘Invertir más en publicidad’],
correct:1, exp:‘Las personas son ventaja competitiva si son difíciles de imitar, generan valor y son sostenibles.’},
{q:’¿Qué es la planificación estratégica de RRHH?’,
a:[‘Reaccionar a las vacantes cuando surgen’,‘Anticipar las necesidades de personas para alcanzar los objetivos futuros’,‘Gestionar exclusivamente las nóminas’,‘Contratar sin criterios definidos’],
correct:1, exp:‘La planificación estratégica anticipa qué personas, con qué perfil y cuándo se necesitarán.’},
{q:’¿Qué KPIs son típicos en RRHH estratégico?’,
a:[‘Solo el precio de la acción’,‘Rotación, absentismo, tiempo de cobertura, horas de formación y satisfacción’,‘Solo el volumen de ventas’,‘Solo las valoraciones de clientes’],
correct:1, exp:‘Los KPIs de RRHH incluyen rotación, absentismo, tiempo de cobertura, formación y satisfacción.’},
],

/* ── MÓDULO 1: Procesos de RRHH ── */
[
{q:’¿Cuál es el primer paso en un proceso de selección?’,
a:[‘Publicar la oferta de empleo’,‘Definir el perfil del puesto’,‘Realizar las entrevistas’,‘Firmar el contrato’],
correct:1, exp:‘Antes de publicar, hay que definir el perfil: competencias, formación y experiencia requeridas.’},
{q:’¿Qué es el onboarding?’,
a:[‘El proceso de despido de un empleado’,‘El proceso de integración y adaptación de un nuevo empleado’,‘La evaluación anual de desempeño’,‘Una encuesta de clima laboral’],
correct:1, exp:‘El onboarding facilita la incorporación y adaptación del nuevo empleado a la empresa.’},
{q:’¿Qué es una entrevista por competencias?’,
a:[‘Una entrevista informal sin estructura’,‘Evalúa comportamientos pasados para predecir el rendimiento futuro’,‘Una prueba escrita de conocimientos’,‘Una visita guiada a las instalaciones’],
correct:1, exp:‘La entrevista por competencias usa ejemplos reales del pasado para predecir el comportamiento futuro.’},
{q:’¿Qué es el reclutamiento interno?’,
a:[‘Contratar a familiares de empleados’,‘Cubrir vacantes con personas ya presentes en la organización’,‘Publicar en portales de empleo externos’,‘Contratar a través de ETTs’],
correct:1, exp:‘El reclutamiento interno aprovecha el talento existente en la organización para cubrir vacantes.’},
{q:’¿Qué es el assessment center?’,
a:[‘Un centro de formación continua’,‘Método de evaluación con múltiples pruebas para valorar candidatos de forma integral’,‘Una oficina de empleo pública’,‘Un test de personalidad único’],
correct:1, exp:‘El assessment center usa dinámicas, role plays y pruebas para evaluar competencias integralmente.’},
{q:’¿Qué es la gestión del desempeño?’,
a:[‘Controlar la asistencia diaria’,‘Proceso continuo de fijación de objetivos, seguimiento y evaluación del rendimiento’,‘Solo calcular el bonus anual’,‘Revisar contratos laborales’],
correct:1, exp:‘La gestión del desempeño es un ciclo continuo: fijar objetivos, dar feedback y evaluar resultados.’},
{q:’¿Qué es el feedback 360 grados?’,
a:[‘Una evaluación solo del superior inmediato’,‘Evaluación del empleado por superiores, compañeros, subordinados y autoevaluación’,‘Un test de personalidad’,‘Una encuesta de satisfacción de clientes’],
correct:1, exp:‘El 360° recoge opiniones de todo el entorno laboral del evaluado para una visión integral.’},
{q:’¿Cuál es la diferencia entre formación y desarrollo?’,
a:[‘Son exactamente lo mismo’,‘Formación cubre necesidades actuales; desarrollo prepara para el futuro’,‘El desarrollo es solo para directivos’,‘La formación es exclusivamente técnica’],
correct:1, exp:‘La formación resuelve necesidades inmediatas; el desarrollo prepara para responsabilidades futuras.’},
{q:’¿Qué es la detección de necesidades formativas (DNF)?’,
a:[‘Preguntar a los empleados qué cursos prefieren’,‘Proceso para identificar la brecha entre competencias actuales y las requeridas’,‘Revisar el catálogo de cursos disponibles’,‘Calcular el presupuesto de formación’],
correct:1, exp:‘La DNF identifica la brecha entre competencias actuales y las necesarias para los objetivos.’},
{q:’¿Qué es el plan de carrera?’,
a:[‘El currículum vitae del empleado’,‘Hoja de ruta que define el desarrollo profesional del empleado dentro de la empresa’,‘El contrato de trabajo indefinido’,‘El plan de jubilación anticipada’],
correct:1, exp:‘El plan de carrera define la progresión profesional y las acciones de desarrollo necesarias.’},
{q:’¿Qué es el mentoring en el ámbito laboral?’,
a:[‘Un tipo de contrato de prácticas’,‘Relación en que un profesional experimentado guía el desarrollo de otro’,‘Un programa de descuentos para empleados’,‘Una evaluación anual de desempeño’],
correct:1, exp:‘El mentoring es una relación de guía en la que un mentor apoya el desarrollo profesional del mentee.’},
{q:’¿Qué es el absentismo laboral?’,
a:[‘El período de vacaciones anuales’,‘Ausencias no planificadas al trabajo, medidas como porcentaje de horas perdidas’,‘Las bajas por maternidad o paternidad’,‘Los días festivos oficiales’],
correct:1, exp:‘El absentismo son las ausencias no planificadas; se mide como % de horas perdidas sobre las previstas.’},
{q:’¿Cómo se calcula la tasa de rotación de personal?’,
a:[‘Número de bajas dividido entre el total de empleados’,’(Número de bajas / Plantilla media) × 100’,‘Días de baja multiplicados por el salario’,‘Número total de bajas en el año’],
correct:1, exp:‘Tasa de rotación = (Nº de bajas / Plantilla media) × 100. Mide la estabilidad de la plantilla.’},
{q:’¿Qué es la entrevista de salida?’,
a:[‘La entrevista final del proceso de selección’,‘Conversación al término de la relación laboral para conocer causas y mejorar retención’,‘La evaluación de desempeño del último año’,‘El trámite de baja en la Seguridad Social’],
correct:1, exp:‘La entrevista de salida recoge información clave para mejorar la retención y el clima organizacional.’},
{q:’¿Qué es el employer branding en los procesos de RRHH?’,
a:[‘La publicidad de los productos de la empresa’,‘La imagen de la empresa como empleador para atraer y retener talento’,‘La marca personal del CEO’,‘El logotipo y colores corporativos’],
correct:1, exp:‘El employer branding construye la reputación de la empresa como empleador deseable para el talento.’},
],

/* ── MÓDULO 2: Política Retributiva ── */
[
{q:’¿Qué es la política retributiva?’,
a:[‘Solo el salario base mensual’,‘Conjunto de decisiones sobre cómo remunerar de forma justa y competitiva’,‘El convenio colectivo del sector’,‘Solo los beneficios sociales’],
correct:1, exp:‘La política retributiva define criterios de remuneración: fijo, variable, beneficios y equidad.’},
{q:’¿Qué diferencia hay entre salario bruto y salario neto?’,
a:[‘Son exactamente iguales’,‘Bruto incluye todos los conceptos; neto es lo que cobra el empleado tras retenciones’,‘El neto siempre es mayor que el bruto’,‘El bruto es solo el salario base’],
correct:1, exp:‘Salario bruto es el total pactado; neto es lo que se percibe tras retenciones fiscales y de SS.’},
{q:’¿Qué es el Salario Mínimo Interprofesional (SMI)?’,
a:[‘El salario promedio del sector’,‘La retribución mínima legal que todo trabajador tiene derecho a percibir’,‘El salario de los directivos’,‘El salario fijado en el convenio colectivo’],
correct:1, exp:‘El SMI es la retribución mínima legal establecida por el gobierno para cualquier tipo de trabajo.’},
{q:’¿Qué es la retribución variable?’,
a:[‘El salario fijo mensual garantizado’,‘Parte de la retribución ligada al rendimiento, resultados u objetivos alcanzados’,‘Los beneficios sociales de la empresa’,‘Las horas extraordinarias realizadas’],
correct:1, exp:‘La retribución variable premia resultados: comisiones, bonus, participación en beneficios, etc.’},
{q:’¿Qué son los beneficios sociales o fringe benefits?’,
a:[‘El salario fijo mensual’,‘Compensaciones adicionales no salariales: seguro médico, plan de pensiones, coche, etc.’,‘Las horas extraordinarias pagadas’,‘Los incentivos individuales por ventas’],
correct:1, exp:‘Los beneficios sociales complementan el salario con elementos como seguro médico o plan de pensiones.’},
{q:’¿Qué es la banda o horquilla salarial?’,
a:[‘El salario establecido en el convenio colectivo’,‘Rango de retribución para un puesto: mínimo, punto medio y máximo’,‘El complemento de antigüedad’,‘El salario neto mensual’],
correct:1, exp:‘La banda salarial define el rango retributivo de un puesto, con mínimo, punto medio y máximo.’},
{q:’¿Qué es la equidad interna en retribución?’,
a:[‘Que todos los empleados cobren exactamente lo mismo’,‘Percepción de justicia al comparar retribuciones dentro de la misma empresa’,‘Que nadie conozca el salario de los demás’,‘Solo cumplir lo establecido en el convenio’],
correct:1, exp:‘La equidad interna garantiza que las diferencias salariales sean justas y coherentes internamente.’},
{q:’¿Qué es la competitividad externa en retribución?’,
a:[‘Pagar siempre menos que la competencia’,‘Posicionamiento del salario respecto al mercado para atraer y retener talento’,‘Ofrecer más días de vacaciones’,‘Solo mejorar los bonus variables’],
correct:1, exp:‘La competitividad externa compara nuestros salarios con el mercado laboral del sector.’},
{q:’¿Para qué sirve una encuesta salarial?’,
a:[‘Para medir la satisfacción de los empleados’,‘Para obtener datos de retribución del mercado y ajustar la política salarial’,‘Para calcular las nóminas mensuales’,‘Para negociar el convenio colectivo’],
correct:1, exp:‘La encuesta salarial aporta datos del mercado para ajustar la política retributiva y ser competitivos.’},
{q:’¿Qué es la retribución flexible?’,
a:[‘Cambiar el salario cada mes según las necesidades’,‘Sistema que permite destinar parte del salario bruto a productos con ventaja fiscal’,‘Trabajar a tiempo parcial con salario reducido’,‘Cobrar parte del salario en especie’],
correct:1, exp:‘La retribución flexible permite al empleado destinar parte del bruto a productos con ventaja fiscal.’},
{q:’¿Qué es el salario emocional?’,
a:[‘Un tipo de bonus emocional en metálico’,‘Beneficios no económicos que mejoran la satisfacción y calidad de vida laboral’,‘El plan de pensiones complementario’,‘Solo la posibilidad de teletrabajar’],
correct:1, exp:‘El salario emocional incluye flexibilidad, conciliación, reconocimiento y otros factores de bienestar.’},
{q:’¿Qué es la valoración de puestos de trabajo?’,
a:[‘Evaluar el rendimiento individual de cada empleado’,‘Proceso sistemático para determinar la importancia relativa de cada puesto’,‘Calcular el bonus anual de cada puesto’,‘Revisar los contratos laborales’],
correct:1, exp:‘La valoración de puestos determina el peso relativo de cada cargo para construir una estructura salarial justa.’},
{q:’¿Qué es la brecha salarial de género?’,
a:[‘Que las mujeres trabajan menos horas’,‘Diferencia de retribución media entre hombres y mujeres en contextos comparables’,‘El coste de las bajas de maternidad’,‘La diferencia de categorías profesionales’],
correct:1, exp:‘La brecha salarial de género mide la diferencia media de retribución entre hombres y mujeres.’},
{q:’¿Qué es el bonus anual o bonus de resultados?’,
a:[‘La paga extra de Navidad obligatoria’,‘Retribución variable ligada al cumplimiento de objetivos anuales’,‘Las vacaciones pagadas adicionales’,‘El complemento de transporte mensual’],
correct:1, exp:‘El bonus anual es retribución variable que premia el cumplimiento de objetivos individuales y/o de empresa.’},
{q:’¿Qué es el Total Rewards o retribución total?’,
a:[‘Solo el salario bruto anual’,‘Suma de salario fijo, variable, beneficios, desarrollo y bienestar ofrecidos al empleado’,‘El coste total de la empresa por empleado’,‘El salario neto que percibe el trabajador’],
correct:1, exp:‘Total Rewards engloba todo el valor recibido: salario, beneficios, desarrollo y bienestar.’},
],

/* ── MÓDULO 3: PRL y Formación ── */
[
{q:’¿Qué significa PRL?’,
a:[‘Plan de Recursos Laborales’,‘Prevención de Riesgos Laborales’,‘Programa de Retribución Laboral’,‘Plan de Relaciones con el personal’],
correct:1, exp:‘PRL es Prevención de Riesgos Laborales: conjunto de actividades para proteger la salud en el trabajo.’},
{q:’¿Cuál es la ley principal de PRL en España?’,
a:[‘Estatuto de los Trabajadores’,‘Ley 31/1995 de Prevención de Riesgos Laborales’,‘Ley Orgánica 3/2018 de Protección de Datos’,‘Ley General de la Seguridad Social’],
correct:1, exp:‘La Ley 31/1995 de PRL establece el marco normativo básico de la prevención en España.’},
{q:’¿Qué es la evaluación de riesgos laborales?’,
a:[‘La evaluación anual del desempeño’,‘Proceso para identificar peligros, valorar riesgos y planificar medidas preventivas’,‘La auditoría financiera de RRHH’,‘El informe médico de empresa’],
correct:1, exp:‘La evaluación de riesgos identifica peligros y valora su probabilidad e impacto para prevenirlos.’},
{q:’¿Quién tiene la obligación principal de garantizar la seguridad en el trabajo?’,
a:[‘El propio trabajador individualmente’,‘El empresario’,‘El sindicato de los trabajadores’,‘La mutua de accidentes de trabajo’],
correct:1, exp:‘El empresario es el principal responsable de garantizar la seguridad y salud de los trabajadores.’},
{q:’¿Qué es un EPI (Equipo de Protección Individual)?’,
a:[‘Un tipo de contrato laboral especial’,‘Equipo que protege al trabajador de riesgos residuales que no se pueden eliminar’,‘Un software de gestión de RRHH’,‘Un registro interno de accidentes’],
correct:1, exp:‘Los EPIs (casco, guantes, gafas…) son el último recurso de protección ante riesgos residuales.’},
{q:’¿Qué es el plan de prevención de una empresa?’,
a:[‘El plan anual de formación de empleados’,‘Documento que integra la actividad preventiva en la gestión general de la empresa’,‘El reglamento interno de convivencia’,‘El manual de calidad ISO’],
correct:1, exp:‘El plan de prevención integra la PRL en la estructura, organización y procesos de la empresa.’},
{q:’¿Qué es un accidente de trabajo?’,
a:[‘Cualquier lesión sufrida por una persona’,‘Lesión corporal sufrida por el trabajador a consecuencia del trabajo por cuenta ajena’,‘Cualquier enfermedad que padezca el trabajador’,‘Una baja voluntaria del trabajador’],
correct:1, exp:‘El accidente de trabajo es la lesión producida en el trabajo o en el trayecto (accidente in itinere).’},
{q:’¿Qué es el Comité de Seguridad y Salud?’,
a:[‘Un sindicato especializado en PRL’,‘Órgano paritario de participación en PRL entre empresa y representantes de trabajadores’,‘El servicio de prevención ajeno’,‘La mutua de accidentes de trabajo’],
correct:1, exp:‘El Comité de Seguridad y Salud es paritario: reúne a representantes de empresa y de trabajadores.’},
{q:’¿Qué son los riesgos psicosociales?’,
a:[‘Los riesgos derivados del ruido en el trabajo’,‘Riesgos derivados de la organización del trabajo: estrés, acoso, burnout, etc.’,‘Los riesgos asociados a productos químicos’,‘Los accidentes físicos graves’],
correct:1, exp:‘Los riesgos psicosociales incluyen estrés laboral, acoso moral, burnout y conflictos organizacionales.’},
{q:’¿Qué es el burnout o síndrome de desgaste profesional?’,
a:[‘Un tipo de accidente de trabajo grave’,‘Síndrome de agotamiento emocional, despersonalización y baja realización personal’,‘Una enfermedad infecciosa laboral’,‘El absentismo repetido y prolongado’],
correct:1, exp:‘El burnout incluye agotamiento emocional, cinismo y pérdida de eficacia derivados del trabajo crónico.’},
{q:’¿Qué es el modelo 70-20-10 en formación?’,
a:[‘70% online, 20% presencial, 10% coaching individual’,‘70% aprendizaje en el puesto, 20% aprendizaje con otros, 10% formación formal’,‘70% teoría, 20% práctica, 10% evaluación final’,‘Un sistema de distribución del presupuesto de formación’],
correct:1, exp:‘El 70-20-10 indica que el 70% del aprendizaje se da en el puesto, el 20% con otros y el 10% es formal.’},
{q:’¿Qué es el e-learning?’,
a:[‘Ver vídeos de YouTube en el trabajo’,‘Formación online estructurada con objetivos, contenidos y evaluación accesible desde cualquier dispositivo’,‘Un PDF de lectura enviado por email’,‘Una videoconferencia puntual’],
correct:1, exp:‘El e-learning es formación online estructurada, interactiva y con seguimiento del progreso del alumno.’},
{q:’¿Qué es la gamificación en formación?’,
a:[‘Jugar durante la jornada laboral’,‘Aplicar mecánicas de juego (puntos, retos, rankings) para motivar el aprendizaje’,‘Un simulador de vuelo profesional’,‘Un juego de mesa para el teambuilding’],
correct:1, exp:‘La gamificación usa mecánicas de juego para aumentar la motivación y el compromiso con el aprendizaje.’},
{q:’¿Qué papel tiene FUNDAE en la formación en España?’,
a:[‘Es una universidad pública estatal’,‘Gestiona el sistema de formación para el empleo, incluida la formación bonificada’,‘Es un sindicato de trabajadores’,‘Es la mutua de accidentes del Estado’],
correct:1, exp:‘FUNDAE gestiona la formación para el empleo y permite a las empresas bonificar cursos con cuotas de SS.’},
{q:’¿Cómo se mide el impacto de la formación en el negocio (modelo Kirkpatrick)?’,
a:[‘Solo con encuestas de satisfacción tras el curso’,‘Con 4 niveles: reacción, aprendizaje, cambio de comportamiento y resultados en el negocio’,‘Contando el número de asistentes al curso’,‘Solo con evaluaciones de conocimiento al finalizar’],
correct:1, exp:‘Kirkpatrick evalúa la formación en 4 niveles progresivos: reacción, aprendizaje, comportamiento y resultados.’},
],

/* ── MÓDULO 4: Legislación Laboral ── */
[
{q:’¿Qué es el Estatuto de los Trabajadores (ET)?’,
a:[‘Un reglamento interno de empresa’,‘La norma legal básica que regula las relaciones laborales en España’,‘El convenio colectivo del sector’,‘El código de conducta empresarial’],
correct:1, exp:‘El ET es la norma principal que regula los derechos y deberes de trabajadores y empresarios en España.’},
{q:’¿Qué es un convenio colectivo?’,
a:[‘Un contrato individual de trabajo’,‘Acuerdo negociado entre empresarios y sindicatos que regula condiciones laborales’,‘Una ley aprobada por el gobierno’,‘Un reglamento interno de la empresa’],
correct:1, exp:‘El convenio colectivo es el acuerdo entre empresarios y representantes de trabajadores sobre condiciones laborales.’},
{q:’¿Cuáles son los tipos de contrato de trabajo más comunes en España?’,
a:[‘Solo el contrato indefinido’,‘Indefinido, temporal, de formación y aprendizaje, y a tiempo parcial’,‘Solo el contrato temporal’,‘El contrato de prácticas y el de obra’],
correct:1, exp:‘Los principales tipos son: indefinido, temporal, formación y aprendizaje, y a tiempo parcial.’},
{q:’¿Qué es el despido procedente?’,
a:[‘Despido sin causa justificada’,‘Despido basado en causas objetivas o disciplinarias debidamente acreditadas’,‘Despido con indemnización máxima’,‘Despido pactado con el trabajador’],
correct:1, exp:‘El despido procedente se basa en causas objetivas o disciplinarias probadas; la indemnización es menor.’},
{q:’¿Qué es el despido improcedente?’,
a:[‘Un despido con causa justificada’,‘Despido sin causa suficiente que obliga a readmitir o indemnizar con 33 días/año’,‘Un despido acordado por ambas partes’,‘Un despido por causas económicas’],
correct:1, exp:‘El despido improcedente carece de causa suficiente y genera derecho a readmisión o indemnización de 33 d/año.’},
{q:’¿Qué es un ERE (Expediente de Regulación de Empleo)?’,
a:[‘Un procedimiento individual de despido’,‘Procedimiento colectivo para suspender, reducir o extinguir contratos por causas económicas u organizativas’,‘Una sanción laboral grave’,‘Un expediente disciplinario individual’],
correct:1, exp:‘El ERE es un procedimiento colectivo para suspender, reducir o extinguir contratos por causas justificadas.’},
{q:’¿Qué es la jornada laboral ordinaria en España?’,
a:[‘40 horas semanales como máximo legal’,‘35 horas semanales como máximo’,‘48 horas semanales de promedio’,‘La que fije libremente el empresario’],
correct:0, exp:‘La jornada máxima legal ordinaria en España es de 40 horas semanales de trabajo efectivo.’},
{q:’¿Qué son las horas extraordinarias?’,
a:[‘Las horas de la jornada regular’,‘Horas trabajadas por encima de la jornada ordinaria, con límite de 80 al año’,‘Horas de formación fuera del horario’,‘Las horas de guardia o disponibilidad’],
correct:1, exp:‘Las horas extraordinarias superan la jornada ordinaria y tienen un límite legal de 80 horas anuales.’},
{q:’¿Qué es la Seguridad Social en España?’,
a:[‘Una empresa privada de seguros’,‘Sistema público de protección que cubre contingencias como enfermedad, desempleo y jubilación’,‘El impuesto sobre la renta de las personas físicas’,‘Un seguro médico privado obligatorio’],
correct:1, exp:‘La Seguridad Social es el sistema público que protege frente a contingencias laborales y personales.’},
{q:’¿Qué es el finiquito?’,
a:[‘La nómina del último mes trabajado’,‘Documento que liquida todos los derechos económicos pendientes al término de la relación laboral’,‘El contrato de nueva empresa’,‘La carta de despido del trabajador’],
correct:1, exp:‘El finiquito liquida las cantidades pendientes al finalizar la relación laboral (vacaciones, pagas, etc.).’},
{q:’¿Qué es el período de preaviso?’,
a:[‘El período de vacaciones pendiente’,‘Tiempo mínimo de antelación con que debe comunicarse la extinción del contrato’,‘El período de prueba inicial’,‘El plazo para pagar el finiquito’],
correct:1, exp:‘El preaviso es el tiempo mínimo que debe anticiparse la comunicación de extinción del contrato.’},
{q:’¿Qué es la incapacidad temporal (IT)?’,
a:[‘Un tipo de contrato temporal’,‘Situación en que el trabajador no puede trabajar por enfermedad o accidente y recibe prestación’,‘Una reducción de jornada pactada’,‘Una excedencia voluntaria’],
correct:1, exp:‘La IT es la situación de baja laboral por enfermedad o accidente, con derecho a prestación económica.’},
{q:’¿Qué es el derecho de huelga?’,
a:[‘Un derecho exclusivo de los sindicatos’,‘Derecho fundamental de los trabajadores a cesar colectivamente en el trabajo para defender sus intereses’,‘Una medida disciplinaria empresarial’,‘Un tipo de cierre patronal’],
correct:1, exp:‘La huelga es un derecho fundamental reconocido en la Constitución española para defender intereses laborales.’},
{q:’¿Qué es el cierre patronal o lockout?’,
a:[‘El cierre definitivo de la empresa’,‘Medida empresarial de suspensión temporal del trabajo ante huelga o alteración del orden laboral’,‘Un despido colectivo encubierto’,‘Una reducción temporal de jornada’],
correct:1, exp:‘El cierre patronal es la suspensión temporal de la actividad por el empresario ante conflicto laboral grave.’},
{q:’¿Qué son las infracciones laborales graves?’,
a:[‘Solo las que llevan a despido inmediato’,‘Incumplimientos laborales que pueden sancionarse con multas importantes según la LISOS’,‘Solo las relacionadas con PRL’,‘Cualquier incumplimiento del convenio colectivo’],
correct:1, exp:‘Las infracciones graves se recogen en la LISOS y pueden sancionarse con multas de 626 a 6.250 euros.’},
],
];

/* ============================================================
SECTION 3 – APP STATE
============================================================ */
let lang = ‘de’;
let currentUser = null;

const qs = {
moduleId:  null,
currentQ:  0,
score:     0,
answered:  false,
shuffled:  [],
unlockedModules: [0,1,2,3,4],   // alle Module sofort verfügbar
completedModules: {},            // moduleId → starsEarned
currentRank: 0,
lastPct: 0,
};

const RANK_ICONS = [‘🎓’,‘📋’,‘🗂️’,‘👔’,‘📊’,‘🤝’,‘🏆’];
const ACHIEVEMENTS = [
{id:‘first’,   icon:‘🎯’, label:{de:‘Erster Quiz’,   en:‘First Quiz’,  es:‘Primer Quiz’}},
{id:‘perfect’, icon:‘💯’, label:{de:‘Perfekt’,       en:‘Perfect’,     es:‘Perfecto’}},
{id:‘all5’,    icon:‘🔥’, label:{de:‘Alle 5 Module’, en:‘All 5 modules’,es:‘5 Módulos’}},
{id:‘top’,     icon:‘🏆’, label:{de:‘HR Manager’,    en:‘HR Manager’,  es:‘HR Manager’}},
{id:‘sharer’,  icon:‘📢’, label:{de:‘Teiler’,        en:‘Sharer’,      es:‘Compartidor’}},
];

/* ============================================================
SECTION 4 – INIT: alle Event-Listener nach DOM ready setzen
============================================================ */
document.addEventListener(‘DOMContentLoaded’, function () {

// Lokalen Stand laden
loadLocalState();

// Sprache anwenden (Standard: DE)
applyLang(‘de’);

// Fußzeile Jahreszahl
var fyEl = document.getElementById(‘foot-year’);
if (fyEl) fyEl.textContent = new Date().getFullYear();

// Nav scrolled-Schatten
window.addEventListener(‘scroll’, function () {
var nav = document.getElementById(‘main-nav’);
if (nav) nav.classList.toggle(‘scrolled’, window.scrollY > 10);
});

// ── Sprach-Buttons ──
bindClick(‘btn-de’,   function () { setLang(‘de’); });
bindClick(‘btn-en’,   function () { setLang(‘en’); });
bindClick(‘btn-es’,   function () { setLang(‘es’); });
bindClick(‘d-btn-de’, function () { setLang(‘de’); });
bindClick(‘d-btn-en’, function () { setLang(‘en’); });
bindClick(‘d-btn-es’, function () { setLang(‘es’); });

// ── Navigations-Links (Desktop + Drawer) ──
bindAllData(‘data-page’, function (el) {
el.addEventListener(‘click’, function () {
var page = el.getAttribute(‘data-page’);
showPage(page);
closeDrawer();
});
});

// ── Logo-Buttons ──
document.querySelectorAll(’.nav-logo’).forEach(function (btn) {
btn.addEventListener(‘click’, function () { showPage(‘home’); closeDrawer(); });
});

// ── Hamburger ──
bindClick(‘ham-btn’, openDrawer);

// ── Drawer schließen ──
bindClick(‘drawer-overlay’, closeDrawer);
bindClick(‘drawer-close-btn’, closeDrawer);

// ── Modal (Auth) ──
var authModal = document.getElementById(‘auth-modal’);
if (authModal) {
authModal.addEventListener(‘click’, function (e) {
if (e.target === authModal) closeAuth();
});
}
bindClick(‘modal-close-btn’, closeAuth);
bindClick(‘nav-auth-btn’, openAuth);
bindClick(‘drawer-auth-btn’, openAuth);

// ── Modal Tabs ──
bindClick(‘modal-tab-login’,    function () { switchTab(‘login’); });
bindClick(‘modal-tab-register’, function () { switchTab(‘register’); });

// ── Login / Register Formulare ──
var formLogin = document.getElementById(‘form-login’);
if (formLogin) formLogin.addEventListener(‘submit’, function (e) { e.preventDefault(); doLogin(); });
var formReg = document.getElementById(‘form-register’);
if (formReg) formReg.addEventListener(‘submit’, function (e) { e.preventDefault(); doRegister(); });

// ── Legal Tabs ──
bindClick(‘legal-tab-imp’,  function () { showLegal(‘imp’); });
bindClick(‘legal-tab-dsde’, function () { showLegal(‘dsde’); });
bindClick(‘legal-tab-dses’, function () { showLegal(‘dses’); });

// ── Quiz: Weiter-Button ──
bindClick(‘next-btn’, nextQ);

// ── Ergebnis-Buttons ──
bindClick(‘btn-retry’,  retryLevel);
bindClick(‘btn-dl’,     downloadCert);
bindClick(‘btn-ovr’,    function () { showPage(‘quiz-select’); });
bindClick(‘btn-cert-register’, openAuth);

// ── Share ──
bindClick(‘btn-share-wa’, shareWA);
bindClick(‘btn-share-li’, shareLI);
bindClick(‘btn-share-cp’, copyLink);

// ── Hero / Home Buttons ──
bindClick(‘btn-hero-quiz’, function () { showPage(‘topics’); });
bindClick(‘btn-hero-more’, function () { showPage(‘about-platform’); });

// ── Certificate Seite ──
bindClick(‘btn-cert-page-reg’, openAuth);

// ── Dashboard Logout ──
bindClick(‘btn-logout’, logout);

// ── Barrierefreiheit-Toolbar ──
bindClick(‘a11y-normal’, function () { setFontSize(‘normal’); });
bindClick(‘a11y-lg’,     function () { setFontSize(‘lg’); });
bindClick(‘a11y-xl’,     function () { setFontSize(‘xl’); });
bindClick(‘a11y-theme’,  toggleTheme);
bindClick(‘a11y-contrast’, toggleContrast);
bindClick(‘a11y-lh’,     toggleLineHeight);
bindClick(‘a11y-reset’,  resetA11y);

// ── Footer Navigation ──
bindAllClass(‘footer-nav-btn’, function (btn) {
btn.addEventListener(‘click’, function () {
var page = btn.getAttribute(‘data-page’);
if (page) showPage(page);
var legal = btn.getAttribute(‘data-legal’);
if (legal) { showPage(‘legal’); showLegal(legal); }
});
});

// Escape-Taste
document.addEventListener(‘keydown’, function (e) {
if (e.key === ‘Escape’) { closeAuth(); closeDrawer(); }
});

// Initiales Rendering
renderTopics();

console.log(‘✅ Upskill Academy geladen. Sprache:’, lang);
});

/* ============================================================
SECTION 5 – HILFSFUNKTIONEN für Event-Binding
============================================================ */
function bindClick(id, fn) {
var el = document.getElementById(id);
if (el) el.addEventListener(‘click’, fn);
}

function bindAllData(attr, fn) {
document.querySelectorAll(’[’ + attr + ‘]’).forEach(fn);
}

function bindAllClass(cls, fn) {
document.querySelectorAll(’.’ + cls).forEach(fn);
}

/* ============================================================
SECTION 6 – SPRACHE
============================================================ */
function t(key) {
return (TR[lang] && TR[lang][key] !== undefined)
? TR[lang][key]
: (TR[‘de’][key] !== undefined ? TR[‘de’][key] : key);
}

function setLang(l) {
lang = l;
applyLang(l);
}

function applyLang(l) {
lang = l;
document.documentElement.lang = l;

// Sprachbuttons umschalten
[‘de’,‘en’,‘es’].forEach(function (x) {
[‘btn-’+x, ‘d-btn-’+x].forEach(function (id) {
var el = document.getElementById(id);
if (!el) return;
el.classList.toggle(‘active’, x === l);
el.setAttribute(‘aria-pressed’, String(x === l));
});
});

// Alle data-i18n Elemente aktualisieren
document.querySelectorAll(’[data-i18n]’).forEach(function (el) {
var key = el.getAttribute(‘data-i18n’);
if (TR[l] && TR[l][key] !== undefined) {
// input placeholder vs. textContent
if (el.tagName === ‘INPUT’) el.placeholder = TR[l][key];
else el.textContent = TR[l][key];
}
});

// Dynamische Felder ohne data-i18n
setText(‘next-btn’,    t(‘qNext’));
setText(‘lbl-cor’,     t(‘lCorr’));
setText(‘lbl-wr’,      t(‘lWrong’));
setText(‘lbl-pct’,     t(‘lPct’));

var cn = document.getElementById(‘cert-name’);
if (cn) cn.placeholder = t(‘namePH’);
var lci = document.getElementById(‘lbl-cert-name’);
if (lci) lci.textContent = t(‘lblCertName’);

// Bereiche neu rendern
renderTopics();
renderRankLadder();
updateAuthUI();
}

/* ============================================================
SECTION 7 – NAVIGATION
============================================================ */
function showPage(id) {
document.querySelectorAll(’.page’).forEach(function (p) {
p.classList.remove(‘active’);
});

var page = document.getElementById(‘page-’ + id);
if (page) {
page.classList.add(‘active’);
} else {
console.warn(‘Seite nicht gefunden: page-’ + id);
return;
}

// Nav-Links aktiv setzen
document.querySelectorAll(’[data-page]’).forEach(function (el) {
el.classList.toggle(‘active’, el.getAttribute(‘data-page’) === id);
});

// Fokus setzen
var main = document.getElementById(‘main-content’);
if (main) main.focus();

window.scrollTo(0, 0);

// Seiten-spezifisch
if (id === ‘topics’)      renderTopics();
if (id === ‘quiz-select’) { renderRankLadder(); renderLevelCards(); }
if (id === ‘dashboard’)   renderDashboard();
}

/* ── Drawer ── */
function openDrawer() {
document.getElementById(‘mobile-drawer’).classList.add(‘open’);
document.getElementById(‘drawer-overlay’).classList.add(‘open’);
var h = document.getElementById(‘ham-btn’);
if (h) h.setAttribute(‘aria-expanded’, ‘true’);
}

function closeDrawer() {
document.getElementById(‘mobile-drawer’).classList.remove(‘open’);
document.getElementById(‘drawer-overlay’).classList.remove(‘open’);
var h = document.getElementById(‘ham-btn’);
if (h) h.setAttribute(‘aria-expanded’, ‘false’);
}

/* ── Legal Tabs ── */
function showLegal(tab) {
[‘imp’,‘dsde’,‘dses’].forEach(function (id) {
var el = document.getElementById(‘legal-’ + id);
if (el) el.style.display = (id === tab) ? ‘block’ : ‘none’;
});
[‘imp’,‘dsde’,‘dses’].forEach(function (id, i) {
var btn = document.getElementById(‘legal-tab-’ + id);
if (btn) {
btn.classList.toggle(‘active’, id === tab);
btn.setAttribute(‘aria-selected’, String(id === tab));
}
});
}

/* ============================================================
SECTION 8 – BARRIEREFREIHEIT
============================================================ */
function setFontSize(size) {
document.body.classList.remove(‘fs-lg’, ‘fs-xl’);
if (size !== ‘normal’) document.body.classList.add(‘fs-’ + size);
}

function toggleTheme() {
var isDark = document.documentElement.getAttribute(‘data-theme’) === ‘dark’;
document.documentElement.setAttribute(‘data-theme’, isDark ? ‘light’ : ‘dark’);
showToast(isDark ? ‘☀️ Hellmodus’ : ‘🌙 Dunkelmodus’);
}

function toggleContrast() {
document.body.classList.toggle(‘hc’);
showToast(‘◑ Kontrast geändert’);
}

function toggleLineHeight() {
document.body.classList.toggle(‘line-height-lg’);
showToast(‘↕ Zeilenabstand geändert’);
}

function resetA11y() {
document.body.classList.remove(‘fs-lg’,‘fs-xl’,‘hc’,‘line-height-lg’);
document.documentElement.removeAttribute(‘data-theme’);
showToast(‘✕ Einstellungen zurückgesetzt’);
}

/* ============================================================
SECTION 9 – AUTH
============================================================ */
function openAuth()  { document.getElementById(‘auth-modal’).classList.add(‘open’); }
function closeAuth() { document.getElementById(‘auth-modal’).classList.remove(‘open’); }

function switchTab(tab) {
var login = document.getElementById(‘form-login’);
var reg   = document.getElementById(‘form-register’);
if (login) login.style.display = tab === ‘login’    ? ‘flex’ : ‘none’;
if (reg)   reg.style.display   = tab === ‘register’ ? ‘flex’ : ‘none’;

var tl = document.getElementById(‘modal-tab-login’);
var tr = document.getElementById(‘modal-tab-register’);
if (tl) { tl.classList.toggle(‘active’, tab === ‘login’);    tl.setAttribute(‘aria-selected’, String(tab===‘login’)); }
if (tr) { tr.classList.toggle(‘active’, tab === ‘register’); tr.setAttribute(‘aria-selected’, String(tab===‘register’)); }
}

function doLogin() {
var email = (document.getElementById(‘li-email’) || {}).value || ‘’;
var pw    = (document.getElementById(‘li-pw’)    || {}).value || ‘’;
email = email.trim();
if (!email || !pw) { showToast(‘⚠️ Bitte alle Felder ausfüllen.’); return; }

var stored = localStorage.getItem(‘ua_acc_’ + email);
if (!stored) { showToast(‘⚠️ Kein Konto gefunden. Bitte registrieren.’); return; }

currentUser = JSON.parse(stored);
localStorage.setItem(‘ua_user’, JSON.stringify(currentUser));
updateAuthUI();
closeAuth();
showToast(’👋 Willkommen, ’ + currentUser.name + ‘!’);
}

function doRegister() {
var name  = (document.getElementById(‘rg-name’)  || {}).value || ‘’;
var email = (document.getElementById(‘rg-email’) || {}).value || ‘’;
var pw    = (document.getElementById(‘rg-pw’)    || {}).value || ‘’;
name = name.trim(); email = email.trim();
if (!name || !email || !pw) { showToast(‘⚠️ Bitte alle Felder ausfüllen.’); return; }
if (pw.length < 8) { showToast(‘⚠️ Passwort muss mind. 8 Zeichen haben.’); return; }

currentUser = { name:name, email:email, certs:[], xp:0, achievements:[] };
localStorage.setItem(‘ua_acc_’ + email, JSON.stringify(currentUser));
localStorage.setItem(‘ua_user’, JSON.stringify(currentUser));
updateAuthUI();
closeAuth();
showToast(’🎉 Konto erstellt! Willkommen, ’ + name + ‘!’);
spawnConfetti();
}

function logout() {
currentUser = null;
localStorage.removeItem(‘ua_user’);
updateAuthUI();
showPage(‘home’);
showToast(‘👋 Abgemeldet.’);
}

function updateAuthUI() {
var navBtn  = document.getElementById(‘nav-auth-btn’);
var drawBtn = document.getElementById(‘drawer-auth-btn’);

if (currentUser) {
var label = ‘👤 ’ + currentUser.name.split(’ ’)[0];
if (navBtn)  { navBtn.textContent  = label; navBtn.onclick  = function () { showPage(‘dashboard’); }; }
if (drawBtn) { drawBtn.textContent = label; drawBtn.onclick = function () { showPage(‘dashboard’); closeDrawer(); }; }
} else {
if (navBtn)  { navBtn.textContent  = t(‘navLogin’); navBtn.onclick  = openAuth; }
if (drawBtn) { drawBtn.textContent = t(‘navLogin’); drawBtn.onclick = function () { openAuth(); closeDrawer(); }; }
}

// Urkunden-Download nur für eingeloggte Nutzer
var wrap  = document.getElementById(‘cert-name-wrap’);
var hint  = document.getElementById(‘cert-login-hint’);
var btnDl = document.getElementById(‘btn-dl’);
if (wrap)  wrap.style.display  = currentUser ? ‘block’       : ‘none’;
if (hint)  hint.style.display  = currentUser ? ‘none’        : ‘block’;
if (btnDl) btnDl.style.display = currentUser ? ‘inline-flex’ : ‘none’;
}

/* ============================================================
SECTION 10 – TOPICS & LEVELS RENDERN
============================================================ */
function renderTopics() {
var grid = document.getElementById(‘topic-grid’);
if (!grid) return;

var names  = t(‘moduleNames’);
var descs  = t(‘moduleDesc’);
var emojis = t(‘moduleEmoji’);

grid.innerHTML = ‘’;
for (var i = 0; i < 5; i++) {
(function (idx) {
var card = document.createElement(‘article’);
card.className = ‘topic-card’;
card.setAttribute(‘role’, ‘listitem’);
card.setAttribute(‘tabindex’, ‘0’);
card.setAttribute(‘aria-label’, names[idx]);

```
  card.innerHTML =
    '<div class="topic-icon-wrap" aria-hidden="true">' + emojis[idx] + '</div>' +
    '<h3>' + names[idx] + '</h3>' +
    '<p>' + descs[idx] + '</p>' +
    '<div class="topic-meta">15 ' + t('qPill') + 'en</div>';

  card.addEventListener('click', function () { startModule(idx); });
  card.addEventListener('keypress', function (e) { if (e.key === 'Enter') startModule(idx); });
  grid.appendChild(card);
})(i);
```

}
}

function startModule(moduleId) {
qs.moduleId = moduleId;

// Modulname als Label setzen
var lbl = document.getElementById(‘module-label-select’);
if (lbl) lbl.textContent = t(‘moduleNames’)[moduleId];

showPage(‘quiz-select’);
}

/* ── Rank Ladder ── */
function renderRankLadder() {
var el = document.getElementById(‘rank-ladder’);
if (!el) return;

var ranks = t(‘ranks’);
el.innerHTML = ‘’;
ranks.forEach(function (r, i) {
if (i > 0) {
var conn = document.createElement(‘div’);
conn.className = ‘rank-conn’ + (i <= qs.currentRank ? ’ filled’ : ‘’);
el.appendChild(conn);
}
var step = document.createElement(‘div’);
step.className = ‘rank-step’ + (i < qs.currentRank ? ’ unlocked’ : ‘’) + (i === qs.currentRank ? ’ current’ : ‘’);
step.setAttribute(‘role’, ‘listitem’);
step.setAttribute(‘aria-label’, r + (i === qs.currentRank ? ’ – aktuell’ : ‘’));
step.innerHTML =
‘<div class="rs-icon" aria-hidden="true">’ + RANK_ICONS[i] + ‘</div>’ +
‘<span class="rs-lbl">’ + r + ‘</span>’;
el.appendChild(step);
});
}

/* ── Level Cards (ein Quiz pro Modul, kein Level-System) ── */
function renderLevelCards() {
var el = document.getElementById(‘level-grid’);
if (!el || qs.moduleId === null) return;

var modName = t(‘moduleNames’)[qs.moduleId];
var key     = ‘mod-’ + qs.moduleId;
var done    = qs.completedModules[key];
var pct     = done !== undefined ? done : null;

el.innerHTML = ‘’;

var card = document.createElement(‘article’);
card.className = ‘level-card’;
card.setAttribute(‘role’, ‘listitem’);
card.setAttribute(‘tabindex’, ‘0’);

var starsHtml = ‘’;
var stars = 0;
if (pct !== null) {
stars = pct >= 80 ? 3 : pct >= 50 ? 2 : 1;
for (var s = 0; s < 3; s++) starsHtml += (s < stars ? ‘⭐’ : ‘☆’);
}

var statusText = pct !== null
? starsHtml + ’   ’ + pct + ‘%’
: ’15 ’ + t(‘qPill’) + ’en · ’ + t(‘moduleEmoji’)[qs.moduleId];

card.innerHTML =
‘<div class="lc-icon" aria-hidden="true">’ + t(‘moduleEmoji’)[qs.moduleId] + ‘</div>’ +
‘<h3>’ + modName + ‘</h3>’ +
‘<p>’ + t(‘moduleDesc’)[qs.moduleId] + ‘</p>’ +
‘<div class="level-stars">’ + statusText + ‘</div>’ +
‘<div class="level-info" style="margin-top:0.75rem;">’ +
‘<button class="btn btn-primary btn-sm" id="btn-start-quiz">🚀 Quiz starten</button>’ +
‘</div>’;

el.appendChild(card);

// Start-Button binden
var startBtn = document.getElementById(‘btn-start-quiz’);
if (startBtn) startBtn.addEventListener(‘click’, function () { startQuiz(qs.moduleId); });
}

/* ============================================================
SECTION 11 – QUIZ LOGIC
============================================================ */
function startQuiz(moduleId) {
var questions = QDB[moduleId];
if (!questions || !questions.length) {
showToast(‘⚠️ Keine Fragen für dieses Modul.’);
return;
}

qs.moduleId  = moduleId;
qs.currentQ  = 0;
qs.score     = 0;
qs.answered  = false;
qs.shuffled  = shuffleArray(questions.slice());

var titleEl = document.getElementById(‘quiz-title’);
if (titleEl) titleEl.textContent = t(‘moduleEmoji’)[moduleId] + ’ ’ + t(‘moduleShort’)[moduleId];

var totEl = document.getElementById(‘q-tot’);
if (totEl) totEl.textContent = qs.shuffled.length;

var scoreEl = document.getElementById(‘q-score’);
if (scoreEl) scoreEl.textContent = ‘0’;

var nextBtn = document.getElementById(‘next-btn’);
if (nextBtn) nextBtn.textContent = t(‘qNext’);

showPage(‘quiz’);
renderQuestion();
}

function renderQuestion() {
var q     = qs.shuffled[qs.currentQ];
var total = qs.shuffled.length;
qs.answered = false;

// Fortschrift-Anzeige
setText(‘q-cur’, qs.currentQ + 1);
setText(‘q-num’, t(‘qLabel’) + ’ ’ + (qs.currentQ + 1) + ’ ’ + t(‘qOf’) + ’ ’ + total);
setText(‘q-text’, q.q);

// Fortschrittsbalken
var pct  = (qs.currentQ / total) * 100;
var fill = document.getElementById(‘prog-fill’);
if (fill) {
fill.style.width = pct + ‘%’;
fill.parentElement.setAttribute(‘aria-valuenow’, Math.round(pct));
}

// Reset
var expl = document.getElementById(‘explanation’);
if (expl) expl.style.display = ‘none’;
var err = document.getElementById(‘error-msg’);
if (err) err.style.display = ‘none’;

var nextBtn = document.getElementById(‘next-btn’);
if (nextBtn) nextBtn.style.display = ‘none’;

// Antworten rendern
var cont = document.getElementById(‘answers’);
if (!cont) return;
cont.innerHTML = ‘’;

var letters  = [‘A’,‘B’,‘C’,‘D’];
var shuffled = shuffleAnswers(q);
var corrIdx  = shuffled.findIndex(function (a) { return a.origIdx === q.correct; });

shuffled.forEach(function (ans, i) {
var btn = document.createElement(‘button’);
btn.className = ‘answer-btn’;
btn.setAttribute(‘aria-label’, letters[i] + ’: ’ + ans.text);
btn.innerHTML =
‘<span class="answer-letter" aria-hidden="true">’ + letters[i] + ‘</span>’ +
ans.text;
btn.addEventListener(‘click’, function () {
handleAnswer(i, corrIdx, q.exp, cont);
});
cont.appendChild(btn);
});
}

function handleAnswer(selected, correct, explanation, container) {
if (qs.answered) return;
qs.answered = true;

var btns = container.querySelectorAll(’.answer-btn’);
btns.forEach(function (b) { b.disabled = true; });

var isCorrect = (selected === correct);
if (isCorrect) {
qs.score++;
setText(‘q-score’, qs.score);
btns[selected].classList.add(‘correct’);
} else {
btns[selected].classList.add(‘wrong’);
if (btns[correct]) btns[correct].classList.add(‘missed’);
}

// Erklärung anzeigen
var expl = document.getElementById(‘explanation’);
if (expl) {
expl.innerHTML = ‘<strong>’ + (isCorrect ? t(‘qRight’) : t(‘qWrong’)) + ’</strong> ’ + explanation;
expl.style.display = ‘block’;
}

// Weiter-Button
var nextBtn = document.getElementById(‘next-btn’);
if (nextBtn) nextBtn.style.display = ‘inline-flex’;
}

function nextQ() {
qs.currentQ++;
if (qs.currentQ >= qs.shuffled.length) {
showResult();
} else {
renderQuestion();
}
}

function retryLevel() {
if (qs.moduleId !== null) startQuiz(qs.moduleId);
}

/* ============================================================
SECTION 12 – ERGEBNIS
============================================================ */
function showResult() {
var total = qs.shuffled.length;
var cor   = qs.score;
var pct   = Math.round((cor / total) * 100);
qs.lastPct = pct;

// Modul-Fortschritt speichern
var key = ‘mod-’ + qs.moduleId;
var prev = qs.completedModules[key] || 0;
qs.completedModules[key] = Math.max(prev, pct);

// Rang-Aufstieg
var rankedUp = false;
var newRank = pct >= 90 ? 6 : pct >= 75 ? 4 : pct >= 50 ? 2 : 0;
if (newRank > qs.currentRank) { qs.currentRank = newRank; rankedUp = true; }

saveLocalState();

// User-Daten updaten
if (currentUser) {
var tiers = t(‘certTiers’);
var tier  = tiers.find(function (ti) { return pct >= ti.min && pct <= ti.max; }) || tiers[0];
currentUser.certs = currentUser.certs || [];
currentUser.certs.push({
lv:    t(‘moduleShort’)[qs.moduleId],
pct:   pct,
medal: tier.medal,
date:  new Date().toLocaleDateString(),
});
currentUser.xp = (currentUser.xp || 0) + Math.round(pct / 10) * 5;
if (currentUser.achievements.indexOf(‘first’)   === -1) currentUser.achievements.push(‘first’);
if (pct === 100 && currentUser.achievements.indexOf(‘perfect’) === -1) currentUser.achievements.push(‘perfect’);
var doneCount = Object.keys(qs.completedModules).length;
if (doneCount >= 5 && currentUser.achievements.indexOf(‘all5’) === -1) currentUser.achievements.push(‘all5’);
if (qs.currentRank >= 6 && currentUser.achievements.indexOf(‘top’) === -1) currentUser.achievements.push(‘top’);
localStorage.setItem(‘ua_user’, JSON.stringify(currentUser));
}

// Texte bestimmen
var tiers2   = t(‘certTiers’);
var tier2    = tiers2.find(function (ti) { return pct >= ti.min && pct <= ti.max; }) || tiers2[0];
var rtIdx    = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0;
var ratIdx   = pct >= 80 ? 2 : pct >= 53 ? 1 : 0;
var ranks    = t(‘ranks’);

// DOM befüllen
setText(‘res-medal’,   tier2.medal);
setText(‘res-title’,   t(‘resultT’)[rtIdx]);
setHTML(‘res-rank’,    t(‘rankNow’) + ’ <strong>’ + RANK_ICONS[qs.currentRank] + ’ ’ + ranks[qs.currentRank] + ‘</strong>’);
setHTML(‘score-num’,   cor + ‘<small>/’ + total + ‘</small>’);

// Ring animieren
setTimeout(function () {
var ring = document.getElementById(‘score-ring’);
if (ring) ring.style.background = ’conic-gradient(var(–indigo) ’ + (pct * 3.6) + ‘deg, var(–border) 0deg)’;
}, 300);

setText(‘s-cor’, cor);
setText(‘s-wr’,  total - cor);
setText(‘s-pct’, pct + ‘%’);
setText(‘lbl-cor’, t(‘lCorr’));
setText(‘lbl-wr’,  t(‘lWrong’));
setText(‘lbl-pct’, t(‘lPct’));

// Bewertungs-Badge
setText(‘rating-badge’, t(‘ratings’)[ratIdx]);

// Rang-Aufstieg-Banner
var banner = document.getElementById(‘rank-up-banner’);
if (banner) {
if (rankedUp) {
banner.style.display = ‘block’;
banner.innerHTML = t(‘rankUp’) + ’ <strong>’ + RANK_ICONS[qs.currentRank] + ’ ’ + ranks[qs.currentRank] + ‘</strong>’;
} else {
banner.style.display = ‘none’;
}
}

updateAuthUI();
showPage(‘result’);
if (pct >= 70) spawnConfetti();
}

/* ============================================================
SECTION 13 – PDF URKUNDE
============================================================ */
function downloadCert() {
if (!currentUser) { openAuth(); return; }

var nameInput = document.getElementById(‘cert-name’);
var name = nameInput ? nameInput.value.trim() : ‘’;
if (!name && currentUser) name = currentUser.name;
if (!name) { showToast(t(‘noName’)); return; }

var pct   = qs.lastPct;
var total = qs.shuffled ? qs.shuffled.length : 15;
var cor   = qs.score;

var tiers = t(‘certTiers’);
var tier  = tiers.find(function (ti) { return pct >= ti.min && pct <= ti.max; }) || tiers[0];

var today = new Date().toLocaleDateString(
lang === ‘es’ ? ‘es-ES’ : lang === ‘en’ ? ‘en-GB’ : ‘de-DE’,
{ year:‘numeric’, month:‘long’, day:‘numeric’ }
);

var jsPDFLib = (window.jspdf && window.jspdf.jsPDF) ? window.jspdf.jsPDF : (window.jsPDF || null);
if (!jsPDFLib) { showToast(‘⚠️ PDF-Bibliothek nicht geladen.’); return; }

var doc = new jsPDFLib({ orientation:‘landscape’, unit:‘mm’, format:‘a4’ });
var W = 297, H = 210;

doc.setFillColor(248,250,252); doc.rect(0,0,W,H,‘F’);
doc.setFillColor(79,70,229);   doc.rect(0,0,W,16,‘F’);
doc.setFillColor(13,148,136);  doc.rect(W-7,0,7,H,‘F’);
doc.setDrawColor(79,70,229); doc.setLineWidth(0.8); doc.rect(10,22,W-20,H-30);

doc.setTextColor(255,255,255); doc.setFont(‘helvetica’,‘bold’); doc.setFontSize(9);
doc.text(‘UPSKILL ACADEMY · © Sara Manoochehri’, W/2, 10, {align:‘center’});

doc.setFont(‘helvetica’,‘bold’); doc.setFontSize(22); doc.setTextColor(79,70,229);
doc.text(tier.title.toUpperCase(), W/2, 48, {align:‘center’});

doc.setDrawColor(79,70,229); doc.setLineWidth(0.7); doc.line(W/2-55,53,W/2+55,53);

var intro = lang===‘es’ ? ‘Se certifica que’ : lang===‘en’ ? ‘This certifies that’ : ‘Hiermit wird bestätigt, dass’;
doc.setFont(‘helvetica’,‘italic’); doc.setFontSize(10); doc.setTextColor(100,116,139);
doc.text(intro, W/2, 63, {align:‘center’});

doc.setFont(‘helvetica’,‘bold’); doc.setFontSize(22); doc.setTextColor(30,41,59);
doc.text(name, W/2, 78, {align:‘center’});

var nw = doc.getTextWidth(name);
doc.setDrawColor(13,148,136); doc.setLineWidth(0.5);
doc.line(W/2-nw/2, 81, W/2+nw/2, 81);

doc.setFont(‘helvetica’,‘normal’); doc.setFontSize(10); doc.setTextColor(100,116,139);
doc.text(t(‘certHereby’), W/2, 92, {align:‘center’});
doc.text(’”’ + t(‘moduleNames’)[qs.moduleId] + ’” ’ + t(‘certComp’), W/2, 101, {align:‘center’});

doc.setFont(‘helvetica’,‘bold’); doc.setTextColor(79,70,229);
doc.text(cor + ’ ’ + t(‘qOf’) + ’ ’ + total + ’ (’ + pct + ’%) ’ + t(‘certScored’), W/2, 110, {align:‘center’});

doc.setFillColor(79,70,229); doc.roundedRect(W/2-15,H-48,30,13,2,2,‘F’);
doc.setFont(‘helvetica’,‘bold’); doc.setFontSize(11); doc.setTextColor(255,255,255);
doc.text(pct+’%’, W/2, H-38, {align:‘center’});

doc.setDrawColor(226,232,240); doc.setLineWidth(0.3); doc.line(36,H-35,W-36,H-35);

doc.setFont(‘helvetica’,‘normal’); doc.setFontSize(8); doc.setTextColor(100,116,139);
doc.line(26,H-24,108,H-24); doc.text(t(‘certSign’), 67, H-20, {align:‘center’});
doc.setFont(‘helvetica’,‘bold’); doc.setTextColor(30,41,59);
doc.text(‘Sara Manoochehri’, 67, H-15, {align:‘center’});

doc.setFont(‘helvetica’,‘normal’); doc.setTextColor(100,116,139);
doc.line(W-108,H-24,W-26,H-24); doc.text(t(‘certDate’), W-67, H-20, {align:‘center’});
doc.setFont(‘helvetica’,‘bold’); doc.setTextColor(30,41,59);
doc.text(today, W-67, H-15, {align:‘center’});

doc.setFont(‘helvetica’,‘normal’); doc.setFontSize(7); doc.setTextColor(148,163,184);
doc.text(‘© Copyright by Sara Manoochehri · Upskill Academy’, W/2, H-8, {align:‘center’});

var safeName = name.replace(/[^a-zA-Z0-9]/g,’*’);
doc.save(’Upskill_Academy*’ + safeName + ‘.pdf’);
showToast(t(‘dlOk’));
}

/* ============================================================
SECTION 14 – DASHBOARD
============================================================ */
function renderDashboard() {
if (!currentUser) { openAuth(); return; }

setText(‘dash-av’,    currentUser.name.charAt(0).toUpperCase());
setText(‘dash-name’,  currentUser.name);
setText(‘dash-email’, currentUser.email);

var certs = currentUser.certs || [];
setText(‘d-quizzes’, certs.length);
setText(‘d-certs’,   certs.length);

var xp   = currentUser.xp || 0;
var lv   = Math.floor(xp / 100) + 1;
var prog = xp % 100;
setText(‘xp-lv’,  ‘Level ’ + lv);
setText(‘xp-pts’, xp + ’ XP’);
var xpFill = document.getElementById(‘xp-fill’);
if (xpFill) xpFill.style.width = prog + ‘%’;

// Urkunden-Liste
var cl = document.getElementById(‘cert-list’);
if (cl) {
if (!certs.length) {
cl.innerHTML = ‘<p style="color:var(--text-muted);font-size:0.875rem;">’ + t(‘noCerts’) + ‘</p>’;
} else {
cl.innerHTML = ‘’;
certs.forEach(function (c) {
cl.innerHTML +=
‘<div class="cert-item">’ +
‘<span class="ci-medal">’ + c.medal + ‘</span>’ +
‘<div class="ci-info"><div class="ci-name">’ + c.lv + ‘</div><div class="ci-date">’ + c.date + ‘</div></div>’ +
‘<span class="ci-pct">’ + c.pct + ‘%</span>’ +
‘</div>’;
});
}
}

// Errungenschaften
var ag = document.getElementById(‘ach-grid’);
if (ag) {
ag.innerHTML = ‘’;
ACHIEVEMENTS.forEach(function (a) {
var earned = (currentUser.achievements || []).indexOf(a.id) !== -1;
var lbl = a.label[lang] || a.label.de;
ag.innerHTML +=
‘<div class="ach ' + (earned ? 'earned' : '') + '">’ +
‘<div class="ach-icon">’ + a.icon + ‘</div>’ +
‘<div class="ach-name">’ + lbl + ‘</div>’ +
‘</div>’;
});
}

// Modul-Fortschritt
var po = document.getElementById(‘prog-overview’);
if (po) {
po.innerHTML = ‘’;
t(‘moduleShort’).forEach(function (name, i) {
var key = ‘mod-’ + i;
var p   = qs.completedModules[key] || 0;
po.innerHTML +=
‘<div style="margin-bottom:0.625rem;">’ +
‘<div style="display:flex;justify-content:space-between;font-size:0.75rem;margin-bottom:0.25rem;">’ +
‘<span>’ + name + ‘</span>’ +
‘<span style="color:var(--indigo);font-weight:600;">’ + p + ‘%</span>’ +
‘</div>’ +
‘<div class="xp-bar" role="progressbar" aria-valuenow="' + p + '" aria-valuemin="0" aria-valuemax="100">’ +
‘<div class="xp-fill" style="width:' + p + '%"></div>’ +
‘</div></div>’;
});
}
}

/* ============================================================
SECTION 15 – SHARE
============================================================ */
function shareWA() {
var modName = t(‘moduleShort’)[qs.moduleId] || ‘’;
var text = encodeURIComponent(
’🎓 Ich habe ’ + qs.lastPct + ‘% im Upskill Academy Quiz (’ + modName + ‘) erreicht! upskill-academy.com’
);
window.open(‘https://wa.me/?text=’ + text, ‘_blank’);
if (currentUser && currentUser.achievements.indexOf(‘sharer’) === -1) {
currentUser.achievements.push(‘sharer’);
localStorage.setItem(‘ua_user’, JSON.stringify(currentUser));
}
showToast(‘📱 WhatsApp wird geöffnet…’);
}

function shareLI() {
var url = encodeURIComponent(‘https://upskill-academy.com’);
window.open(‘https://www.linkedin.com/sharing/share-offsite/?url=’ + url, ‘_blank’);
showToast(‘💼 LinkedIn wird geöffnet…’);
}

function copyLink() {
var text = ’🎓 ’ + qs.lastPct + ‘% im Upskill Academy Quiz! https://upskill-academy.com’;
if (navigator.clipboard) {
navigator.clipboard.writeText(text).then(function () { showToast(‘✅ Kopiert!’); });
} else {
var ta = document.createElement(‘textarea’);
ta.value = text;
document.body.appendChild(ta);
ta.select();
document.execCommand(‘copy’);
ta.remove();
showToast(‘✅ Kopiert!’);
}
}

/* ============================================================
SECTION 16 – UTILITIES
============================================================ */

function showToast(msg) {
var el = document.getElementById(‘toast’);
if (!el) return;
el.textContent = msg;
el.classList.add(‘show’);
setTimeout(function () { el.classList.remove(‘show’); }, 2800);
}

function spawnConfetti() {
var cols = [’#4F46E5’,’#0D9488’,’#F59E0B’,’#F43F5E’,’#10B981’];
for (var i = 0; i < 55; i++) {
(function () {
var el = document.createElement(‘div’);
el.className = ‘cp’;
var size = 6 + Math.random() * 8;
el.style.cssText =
‘left:’ + (Math.random()*100) + ‘vw;top:-10px;’ +
‘width:’ + size + ‘px;height:’ + size + ‘px;’ +
‘background:’ + cols[Math.floor(Math.random()*cols.length)] + ‘;’ +
‘border-radius:’ + (Math.random()>.5?‘50%’:‘2px’) + ‘;’ +
‘animation-duration:’ + (1.5+Math.random()*2) + ‘s;’ +
‘animation-delay:’ + (Math.random()*.8) + ‘s;’;
document.body.appendChild(el);
setTimeout(function () { el.remove(); }, 4000);
})();
}
}

function shuffleArray(arr) {
for (var i = arr.length - 1; i > 0; i–) {
var j = Math.floor(Math.random() * (i + 1));
var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
}
return arr;
}

function shuffleAnswers(q) {
var items = q.a.map(function (text, idx) { return { text:text, origIdx:idx }; });
return shuffleArray(items);
}

function setText(id, val) {
var el = document.getElementById(id);
if (el) el.textContent = val;
}

function setHTML(id, val) {
var el = document.getElementById(id);
if (el) el.innerHTML = val;
}

function saveLocalState() {
try {
localStorage.setItem(‘ua_v5’, JSON.stringify({
cm: qs.completedModules,
r:  qs.currentRank,
}));
} catch (e) {}
}

function loadLocalState() {
try {
var raw = localStorage.getItem(‘ua_v5’);
if (raw) {
var d = JSON.parse(raw);
qs.completedModules = d.cm || {};
qs.currentRank      = d.r  || 0;
}
var uRaw = localStorage.getItem(‘ua_user’);
if (uRaw) { currentUser = JSON.parse(uRaw); }
} catch (e) {}
}