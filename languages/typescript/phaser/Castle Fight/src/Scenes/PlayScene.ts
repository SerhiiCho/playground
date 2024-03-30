import Phaser from 'phaser'
import imageMap from '@/assets/map.png'
import { gameConfig, config } from '@/config'

const mapImageName = 'map'

export default class PlayScene extends Phaser.Scene {
    private scroll = {
        right: false,
        bottom: false,
        left: false,
        top: false,
    }

    public constructor() {
        super('PlayScene')
    }

    // Preloading assets
    public preload(): void {
        this.load.image(mapImageName, imageMap)
    }

    // Creating game objects
    public create(): void {
        this.detectEdgeScrollingEvents()
        this.add.image(0, -250, mapImageName).setOrigin(0, 0)
    }

    public update(): void {
        this.handleMapScroll()
    }

    private resetScroll(): void {
        this.scroll = {
            right: false,
            bottom: false,
            left: false,
            top: false,
        }
    }

    private detectEdgeScrollingEvents(): void {
        const gap = 100

        const zone = {
            right: { from: gameConfig.width - gap, to: gameConfig.width },
            bottom: { from: gameConfig.height - gap, to: gameConfig.height },
            left: { from: 0, to: gap },
            topAge: { from: 0, to: gap },
        }

        // when cursor is at the edge of the screen
        this.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
            if (pointer.x >= zone.right.from) {
                this.resetScroll()
                this.scroll.right = true
            } else if (pointer.x <= zone.left.to) {
                this.resetScroll()
                this.scroll.left = true
            } else if (pointer.y >= zone.bottom.from) {
                this.resetScroll()
                this.scroll.bottom = true
            } else if (pointer.y <= zone.topAge.to) {
                this.resetScroll()
                this.scroll.top = true
            } else {
                this.resetScroll()
            }
        })
    }

    private handleMapScroll(): void {
        console.log(this.cameras.main.scrollY)
        if (this.scroll.right && this.cameras.main.scrollX < config.map.edge.right) {
            this.cameras.main.scrollX += config.map.scrollSpeed
        }

        if (this.scroll.bottom && this.cameras.main.scrollY < config.map.edge.bottom) {
            this.cameras.main.scrollY += config.map.scrollSpeed
        }

        if (this.scroll.left && this.cameras.main.scrollX > config.map.edge.left) {
            this.cameras.main.scrollX -= config.map.scrollSpeed
        }

        if (this.scroll.top && this.cameras.main.scrollY > config.map.edge.top) {
            this.cameras.main.scrollY -= config.map.scrollSpeed
        }
    }
}