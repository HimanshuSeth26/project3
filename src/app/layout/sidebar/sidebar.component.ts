import {Component, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {AppService} from '../../app.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
    host: {
        'class': 'sidebar'
    },
    animations: [
        trigger('toggleSubMenu', [
            state('inactive', style({
                height: '0',
                opacity: '0'
            })),
            state('active', style({
                height: '*',
                opacity: '1'
            })),
            transition('inactive => active', animate('200ms ease-in')),
            transition('active => inactive', animate('200ms ease-out'))
        ])
    ]
})
export class SidebarComponent implements OnInit {
    /* Main Menu

     * title: Main menu title
     * icon: Menu icon from material-design-iconic-fonts. Please refer 'Icons' page for more details
     * route: Router link for page
     * sub: Sub menus
     * visibility: Property for animation. 'inactive' means the sub menu is hidden by default.

     */
    mainMenu: Array<any> = [
        // {
        //     title: 'Home',
        //     icon: 'home',
        //     route: '/home'
        // },
        // {
        //     title: 'Typography',
        //     icon: 'format-underlined',
        //     route: '/typography'
        // },
      {

        title: 'Add Tasks',
        icon: 'format-underlined',
        route: '/tasks'
      },
      // {
      //
      //   title: 'Registration',
      //   icon: 'format-underlined',
      //   route: '/registration'
      // },

      {
        title: 'Register',
        icon: 'format-underlined',
        route: '/register'
      },
      // {
      //   title: 'viewregistration',
      //   icon: 'format-underlined',
      //   route: '/viewregistration'
      // },
      {
        title: 'View Employees',
        icon: 'format-underlined',
        route: '/viewcredentials'
      },
      {
        title: 'report',
        icon: 'format-underlined',
        route: '/report'
      },
      // {
      //   title: 'employee',
      //   icon: 'format-underlined',
      //   route:'/employee'
      // },

        // {
        //     title: 'Widgets',
        //     icon: 'widgets',
        //     route: '/widgets'
        // },
        // {
        //     title: 'Tables',
        //     icon: 'view-list',
        //     sub: [
        //         {
        //             title: 'HTML Table',
        //             route: '/tables/html-table'
        //         },
        //         {
        //             title: 'Data Table',
        //             route: '/tables/data-table'
        //         },
        //         {
        //             title: 'Paginated Data Table',
        //             route: '/tables/data-table-paginated'
        //         }
        //     ],
        //     visibility: 'inactive'
        // },
        // {
        //     title: 'Forms',
        //     icon: 'collection-text',
        //     sub: [
        //         {
        //             title: 'Basic Form Elements',
        //             route: '/forms/form-elements'
        //         },
        //         {
        //             title: 'Form Components',
        //             route: '/forms/form-components'
        //         },
        //         {
        //             title: 'Form Layouts',
        //             route: '/forms/form-layouts'
        //         },
        //         {
        //             title: 'Form Validation',
        //             route: '/forms/form-validation'
        //         }
        //     ],
        //     visibility: 'inactive'
        // },
        // {
        //     title: 'User Interface',
        //     icon: 'swap-alt',
        //     sub: [
        //         {
        //             title: 'Colors',
        //             route: '/user-interface/colors'
        //         },
        //         {
        //             title: 'CSS Animations',
        //             route: '/user-interface/css-animations'
        //         },
        //         {
        //             title: 'Buttons',
        //             route: '/user-interface/buttons'
        //         },
        //         {
        //             title: 'Icons',
        //             route: '/user-interface/icons'
        //         },
        //         {
        //             title: 'Listviews',
        //             route: '/user-interface/listviews'
        //         },
        //         {
        //             title: 'Toolbars',
        //             route: '/user-interface/toolbars'
        //         },
        //         {
        //             title: 'Cards',
        //             route: '/user-interface/cards'
        //         },
        //         {
        //             title: 'Alerts',
        //             route: '/user-interface/alerts'
        //         },
        //         {
        //             title: 'Badges',
        //             route: '/user-interface/badges'
        //         },
        //         {
        //             title: 'Bredcrumbs',
        //             route: '/user-interface/bredcrumbs'
        //         },
        //         {
        //             title: 'Jumbotron',
        //             route: '/user-interface/jumbotron'
        //         },
        //         {
        //             title: 'Navs',
        //             route: '/user-interface/navs'
        //         },
        //         {
        //             title: 'Pagination',
        //             route: '/user-interface/pagination'
        //         },
        //         {
        //             title: 'Progress',
        //             route: '/user-interface/progress'
        //         }
        //     ],
        //     visibility: 'inactive'
        // },
        // {
        //     title: 'Bootstrap Components',
        //     icon: 'group-work',
        //     sub: [
        //         {
        //             title: 'Accordions',
        //             route: '/bootstrap-components/accordions'
        //         },
        //         {
        //             title: 'Alerts',
        //             route: '/bootstrap-components/alerts'
        //         },
        //         {
        //             title: 'Buttons',
        //             route: '/bootstrap-components/buttons'
        //         },
        //         {
        //             title: 'Carousel',
        //             route: '/bootstrap-components/carousel'
        //         },
        //         {
        //             title: 'Collapse',
        //             route: '/bootstrap-components/collapse'
        //         },
        //         {
        //             title: 'Datepicker',
        //             route: '/bootstrap-components/datepicker'
        //         },
        //         {
        //             title: 'Dropdowns',
        //             route: '/bootstrap-components/dropdowns'
        //         },
        //         {
        //             title: 'Modals',
        //             route: '/bootstrap-components/modals'
        //         },
        //         {
        //             title: 'Pagination',
        //             route: '/bootstrap-components/pagination'
        //         },
        //         {
        //             title: 'Popover',
        //             route: '/bootstrap-components/popover'
        //         },
        //         {
        //             title: 'Progressbar',
        //             route: '/bootstrap-components/progressbar'
        //         },
        //         {
        //             title: 'Rating',
        //             route: '/bootstrap-components/rating'
        //         },
        //         {
        //             title: 'Sortable',
        //             route: '/bootstrap-components/sortable'
        //         },
        //         {
        //             title: 'Tabs',
        //             route: '/bootstrap-components/tabs'
        //         },
        //         {
        //             title: 'Timepicker',
        //             route: '/bootstrap-components/timepicker'
        //         },
        //         {
        //             title: 'Tooltips',
        //             route: '/bootstrap-components/tooltips'
        //         },
        //         {
        //             title: 'Typeahead',
        //             route: '/bootstrap-components/typeahead'
        //         }
        //     ],
        //     visibility: 'inactive'
        // },
        // {
        //     title: 'Charts and Maps',
        //     icon: 'trending-up',
        //     sub: [
        //         {
        //             title: 'Charts',
        //             route: '/charts-maps/charts'
        //         },
        //         {
        //             title: 'Maps',
        //             route: '/charts-maps/maps'
        //         }
        //     ],
        //     visibility: 'inactive'
        // },
        // {
        //     title: 'Photo Gallery',
        //     icon: 'image',
        //     visibility: 'inactive',
        //     route: '/photo-gallery'
        // },
        // {
        //     title: 'Sample Pages',
        //     icon: 'collection-item',
        //     sub: [
        //         {
        //             title: 'Profile',
        //             route: '/sample-pages/profile'
        //         },
        //         {
        //             title: 'Messages',
        //             route: '/sample-pages/messages'
        //         },
        //         {
        //             title: 'Contacts',
        //             route: '/sample-pages/contacts'
        //         },
        //         {
        //             title: 'New Contact',
        //             route: '/sample-pages/new-contact'
        //         },
        //         {
        //             title: 'Groups',
        //             route: '/sample-pages/groups'
        //         },
        //         {
        //             title: 'Pricing Tables',
        //             route: '/sample-pages/pricing-tables'
        //         },
        //         {
        //             title: 'Invoice',
        //             route: '/sample-pages/invoice'
        //         },
        //         {
        //             title: 'Todo Lists',
        //             route: '/sample-pages/todo-lists'
        //         },
        //         {
        //             title: 'Notes',
        //             route: '/sample-pages/notes'
        //         },
        //         {
        //             title: 'Search Results',
        //             route: '/sample-pages/search-results'
        //         },
        //         {
        //             title: 'Issue Tracker',
        //             route: '/sample-pages/issue-tracker'
        //         },
        //         {
        //             title: 'FAQ',
        //             route: '/sample-pages/faq'
        //         },
        //         {
        //             title: 'Team',
        //             route: '/sample-pages/team'
        //         },
        //         {
        //             title: 'Blog',
        //             route: '/sample-pages/blog'
        //         },
        //         {
        //             title: 'Blog Details',
        //             route: '/sample-pages/blog-details'
        //         },
        //         {
        //             title: 'Login & SignUp',
        //             route: '/sample-pages/login'
        //         },
        //         {
        //             title: 'Lockscreen',
        //             route: '/sample-pages/lockscreen'
        //         },
        //         {
        //             title: '404',
        //             route: '/sample-pages/404'
        //         },
        //         {
        //             title: 'Empty Page',
        //             route: '/sample-pages/empty-page'
        //         }
        //     ],
        //     visibility: 'inactive'
        // },
    ];

    // Toggle sub menu
    toggleSubMenu(i) {
        this.mainMenu[i].visibility = (this.mainMenu[i].visibility === 'inactive' ? 'active' : 'inactive');
    }

    constructor(private service: AppService) {
    }

    ngOnInit() {
    }

}
