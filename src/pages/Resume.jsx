import Didier_Resume from '../assets/pdf/Currículum.pdf'
const educationData = [
  {
    period: '2010 - 2013',
    university: 'Universidad Veracruzana',
    course: 'Electronics Engineering',
    status: 'enrolled-differed',
    description: 'Learned programming on protoboards and C.'
  },
  {
    period: '2015 - 2017',
    university: 'TecMilenio',
    course: 'Mechatronics Engineering',
    status: 'enrolled-differed',
    description: 'Learned the advanced essentials in computer science, robotics, machine learning, and mechanics. Utilized technologies such as C and AutoCAD. '
  },
  {
    period: '2019 - 2020',
    university: 'TecMilenio',
    course: 'Software Engineering',
    status: 'enrolled-differed',
    description: 'Developed logic in computer science and data structure learned to design algorithms and built (essential) web apps. .'
  },
];

const courses = [
  "Codecademy Learn JavaScript",
  "Codecademy Learn SQL",
  "Coderhouse Python/Django",
  "edX AI Applications and Prompt Engineering"
];

const skills = {
  programming: ["C++ (Beginner)", "JavaScript", "Node.js", "Express", "React"],
  applications: ["PyCharm", "SQL Developer", "WebStorm", "Visual Studio Code"],
  platforms: ["Linux (Ubuntu)", "Windows",]
};
export default function Resume() {
  return (
    <main className="p-4 md:p-8 bg-white shadow-lg rounded-lg">
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">DOWNLOAD MY RESUME</h2>
        <a
          href={Didier_Resume}
          download="DidierThomasMunoz_Resume.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download Resume
        </a>
      </section>

      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold mb-2">DIDIER THOMAS MUÑOZ</h1>
        <p>Monterrey, N.L., México</p>
        <p>+52 229 120 9999</p>
        <p>didierthomas.m@gmail.com</p>
      </div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">EDUCATION</h2>
        {educationData.map(item => (
          <div className="mb-4" key={item.course}>
            <h3 className="text-xl">{item.period}</h3>
            <p>{item.university} - {item.course} - {item.status}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">WORK EXPERIENCE</h2>
        <h3 className="text-xl">January Of 2014 - CURRENTLY</h3>
        <p>La Taberna - QUALITY CONTROL and SALES MANAGER</p>
        <p>I´m responsible for creating partnerships with brewers and advising them on how to meet their sales
          objectives. As the project manager, I coordinate the logistics of beer and social events; with my team, I
          create solutions to provide the best customer experience in our business.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">RELEVANT COURSES</h2>
        <ul>
          {courses.map(course => <li className="mb-2" key={course}>{course}</li>)}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">SKILLS</h2>
        <h3 className="text-xl mb-2">Programming languages:</h3>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.programming.map(skill => <li key={skill}>{skill}</li>)}
        </ul>

        <h3 className="text-xl mt-4 mb-2">Applications:</h3>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.applications.map(app => <li key={app}>{app}</li>)}
        </ul>

        <h3 className="text-xl mt-4 mb-2">Platforms:</h3>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.platforms.map(platform => <li key={platform}>{platform}</li>)}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">LANGUAGES</h2>
        <p>Spanish (Native)</p>
        <p>English (Basic)</p>
      </section>
    </main>
  );
}
