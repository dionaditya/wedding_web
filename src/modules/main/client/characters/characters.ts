import { Spritesheet, Presets } from '@rpgjs/client'

const { RMSpritesheet } = Presets

@Spritesheet({
    images: {
        female132: require('./assets/couple2.png'),
        male012: require('./assets/couple.png'),
        male013: require('./assets/Male 01-2.png'),
    },
    width: 96,
    height: 128,
    ...RMSpritesheet(3, 4)
})
export class Characters { }