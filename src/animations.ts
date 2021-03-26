import { useAnimation, trigger, state, style, transition, animate, animation, keyframes } from '@angular/animations';


export const AnimationFunctions = {
    slideFiltersDownCustom: animation([
        style({ opacity: '{{ opacity }}', transform:'translateY({{ height }})' }),
        animate('{{ time }} cubic-bezier(0.23, 1, 0.32, 1)', style({ opacity: 1, transform:'translateY(0px)' }))  
    ])
}


export const Animations = {
    animeTrigger: trigger('animeTrigger', [
        state('in', style({transform: 'translateY(0)'})),
        transition('void => *', [
        animate(700, keyframes([
            style({opacity: 0, transform: 'translateY(-100%)', offset: 0}),
            style({opacity: 1, transform: 'translateY(25px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}) 
            ]))
        ])
    ]),

    slideFilters: trigger('slideFilters', [
        transition(':enter', [
          style({ opacity: 0, transform:'translateX(-30px)' }),
          animate('1250ms 300ms cubic-bezier(0.23, 1, 0.32, 1)', style({ opacity: 1, transform:'translateX(0px)' }))
        ])
      ]),

      slideFiltersFunctional: trigger('slideFilters', [
        transition(':enter', [
            useAnimation(AnimationFunctions.slideFiltersDownCustom, {
                params: {
                  height: '-30px',
                  opacity: 0,
                  time: '1200ms'
                }
              })
        ])
      ])
}