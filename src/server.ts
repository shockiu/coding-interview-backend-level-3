import Hapi from '@hapi/hapi'
import { defineRoutes } from './routes.ts'

const getServer = () => {
    const server = Hapi.server({
        host: process.env.HOST_DOCKER || 'localhost',
        port: process.env.PORT || 3000,
    })

    defineRoutes(server)

    return server
}

export const initializeServer = async () => {
    const server = getServer()
    await server.initialize()
    return server
}

export const startServer = async () => {
    const server = getServer()
    await server.start()
    console.log(`Server running on ${server.info.uri}`)
    return server
};