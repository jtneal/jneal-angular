import { Component } from '@angular/core';

import { Skill } from './skills.model';
import { SkillLogo } from './skills-logos.model';

@Component({
  moduleId: module.id,
  selector: 'jneal-skills',
  templateUrl: './skills.component.html',
  styleUrls: [ './skills.component.css' ]
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      title: 'Dev Ops',
      items: [ 'Docker', 'Vagrant', 'Ubuntu', 'Nginx', 'Apache', 'MariaDB', 'MySQL', 'Redis', 'Memcached' ]
    }, {
      title: 'Back-end Languages/Frameworks',
      items: [ 'PHP 7', 'NodeJS', 'Silex', 'Symfony', 'Laravel', 'CodeIgniter' ]
    }, {
      title: 'Front-end Languages/Frameworks',
      items: [ 'Angular', 'TypeScript', 'jQuery', 'JavaScript', 'HTML 5', 'CSS 3' ]
    }, {
      title: 'Content Management',
      items: [ 'ExpressionEngine', 'WordPress', 'Joomla' ]
    }, {
      title: 'Graphic Editors',
      items: [ 'Photoshop', 'Fireworks' ]
    }, {
      title: 'Text Editors',
      items: [ 'PhpStorm', 'Sublime Text 3', 'Vim' ]
    }, {
      title: 'Version Control',
      items: [ 'Git / GitHub', 'Mercurial / Bitbucket' ]
    }, {
      title: 'Lighter Experience',
      items: [ 'ASP.NET / C#', 'Ruby on Rails', 'Python', 'Go Lang' ]
    }
  ];

  logos: SkillLogo[] = [
    { url: 'https://www.docker.com/',         image: 'docker.png' },
    { url: 'https://www.ubuntu.com/',         image: 'ubuntu.png' },
    { url: 'https://nginx.org/',              image: 'nginx.png' },
    { url: 'https://mariadb.org/',            image: 'mariadb.png' },
    { url: 'https://redis.io/',               image: 'redis.png' },
    { url: 'https://secure.php.net/',         image: 'php.png' },
    { url: 'http://silex.sensiolabs.org/',    image: 'silex.png' },
    { url: 'https://nodejs.org/',             image: 'nodejs.png' },
    { url: 'https://angular.io/',             image: 'angular.png' },
    { url: 'https://www.typescriptlang.org/', image: 'typescript.png' }
  ];
}
