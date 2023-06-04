from manim import *
import pygame, time

pygame.init()

width = 1600
height = 1200
running = True
i = 0
j = 0

scrn = pygame.display.set_mode((width, height))

while running:
    if i == 0:
        scrn.fill((255, j, 0))
    elif i == 1:
        scrn.fill((255 - j, 255, 0))
    elif i == 2:
        scrn.fill((0, 255, j))
    elif i == 3:
        scrn.fill((0, 255 - j, 255))
    elif i == 4:
        scrn.fill((j, 0, 255))
    else:
        scrn.fill((255, 0, 255 - j))

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    j += 1
    if not(j % 256):
        j = 0
        i = (i + 1) % 6

    pygame.display.update()
    time.sleep(0.005)

pygame.quit()