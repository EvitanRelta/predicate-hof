import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
    transform: {
        '\\.(t|j)s$': 'ts-jest',
    },
}

export default config
