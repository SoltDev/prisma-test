import {Prisma, PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
    {
        login: 'coder',
        posts: {
            create: [
                {
                    slug: 'mask',
                    title: 'Маск рассказал о планах колонизации Марса',
                    content: 'Илон Маск провёл обучающую лекцию для сотрудников SpaceX о колонизации Марса, подчеркнув важность превращения человечества в мультипланетный вид',
                    published: true,
                },
            ],
        },
    },
    {
        login: 'igor',
        posts: {
            create: [
                {
                    slug: 'apple-razrieshila',
                    title: 'Apple разрешила эмуляторы ретро-игр в App Store',
                    content: 'Apple открыла доступ к публикации эмуляторов ретро-игр в App Store для сторонних разработчиков с 5 апреля 2024 года, отменяя предыдущие ограничения',
                    published: true,
                },
            ],
        },
    },
    {
        login: 'kirill',
        posts: {
            create: [
                {
                    slug: 'yandex-shad',
                    title: 'Яндекс подготовит на треть больше специалистов по ИИ',
                    content: 'В этом году Яндекс планирует набрать в собственную Школу анализа данных более 400 студентов, что на треть больше, чем в прошлом. Набор стартовал в начале апреля',
                    published: true,
                },
                {
                    slug: 'obzor-test-drive',
                    title: 'Обзор и тест-драйв Haval Jolion',
                },
            ],
        },
    },
]

async function main() {
    console.log(`Start seeding ...`)
    for (const u of userData) {
        const user = await prisma.user.create({
            data: u,
        })
        console.log(`Created user with id: ${user.id}`)
    }
    console.log(`Seeding finished.`)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })