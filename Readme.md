# mark42
mark42 is a simple lightweight tree-shakable UI library with 0 dependencies
for Telegram Web Apps (TWA). 

## Installation
```
npm i @twa-dev/sdk  @twa-dev/mark42
```

## Usage example
```tsx
import { InitialsAvatar } from '@twa-dev/mark42';

<InitialsAvatar userId={12345} userName="Artur Stambultsian" />
```

## Motivation
Telegram supports different themes and color schemes. 
It can be dark or light. On MacOS, iOS and iPadOS messenger follows apple design guidelines, 
on other platforms (Desktop, Web, Android) it looks like a material interface.

If you want to build a TWA that looks like a native part of Telegram, you have to follow same principles.
Mark42 helps you with that. Each component supports different themes and color schemes out of the box.
Therefore, you can focus on logic of your application and mark42 will make it fancy.