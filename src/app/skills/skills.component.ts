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
      title: 'Back-end Technology (LAMP/LEMP)',
      items: [
        'Linux (Red Hat Enterprise Linux, Ubuntu, and others)',
        'Nginx / Apache',
        'MariaDB / MySQL',
        'PHP 7 / PHP 5',
        'Model-View-Controller (MVC)'
      ]
    },
    {
      title: 'Back-end Frameworks',
      items: [
        'Silex',
        'Slim',
        'FlightPHP',
        'Laravel',
        'CodeIgniter'
      ]
    },
    {
      title: 'Front-end Technology',
      items: [
        'HTML 5',
        'CSS 3',
        'JavaScript',
        'AngularJS',
        'jQuery',
        'AJAX'
      ]
    },
    {
      title: 'Content Management',
      items: [
        'ExpressionEngine',
        'WordPress',
        'Joomla'
      ]
    },
    {
      title: 'Graphic Editors',
      items: [
        'Photoshop',
        'Fireworks'
      ]
    },
    {
      title: 'Text Editors',
      items: [
        'PhpStorm IDE',
        'Sublime Text 3',
        'Vim',
        'Joe\'s Own Editor'
      ]
    },
    {
      title: 'Version Control',
      items: [
        'Git / GitHub',
        'Mercurial / Bitbucket'
      ]
    },
    {
      title: 'Minor Experience',
      items: [
        'SEO',
        'Flash',
        'ASP',
        'ASP.NET/C#',
        'Ruby on Rails',
        'Python',
        'Perl',
        'ColdFusion'
      ]
    }
  ];

  logos: SkillLogo[] = [
    {
      url: 'http://www.ubuntu.com/',
      image: 'ubuntu.png'
    },
    {
      url: 'http://nginx.org/',
      image: 'nginx.png'
    },
    {
      url: 'http://httpd.apache.org/',
      image: 'apache.png'
    },
    {
      url: 'http://mariadb.org/',
      image: 'mariadb.png'
    },
    {
      url: 'http://www.mysql.com/',
      image: 'mysql.png'
    },
    {
      url: 'http://www.php.net/',
      image: 'php.png'
    },
    {
      url: 'http://silex.sensiolabs.org/',
      image: 'silex.png'
    },
    {
      url: 'https://angularjs.org/',
      image: 'angular.png'
    }
  ];
}
