import { Test, TestingModule } from '@nestjs/testing'
import { EventController } from './event.controller'
import { EventService } from './event.service'

describe('EventController', () => {
  let controller: EventController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventController],
      providers: [{ provide: EventService, useValue: {} }],
    }).compile()

    controller = module.get<EventController>(EventController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
