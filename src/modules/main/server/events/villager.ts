import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'
import { DialogPosition } from '@rpgjs/server/lib/Gui/DialogGui'

@EventData({
    name: 'EV-1', 
    hitbox: {
        width: 40,
        height: 40
    }
})
export class VillagerEvent extends RpgEvent {
    onInit() {
        this.setGraphic('female132')
        this.changeMap('simplemap', {
            x: 320,
            y: 306
        })
    }
    async onAction(player: RpgPlayer) {
        await player.showText('I give you 10 gold.', {
            talkWith: this,
        })

        player.gold += 10
    }
} 

@EventData({
    name: 'EV-1', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export class VillagerEvent2 extends RpgEvent {
    onInit() {
        this.setGraphic('male012')
        this.changeMap('simplemap', {
            x: 300,
            y: 330
        })
    }
    async onAction(player: RpgPlayer) {
        await player.showText('I give you 10 gold.', {
            talkWith: this
        })
        player.gold += 10
    }
} 