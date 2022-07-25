# Mini documentation for the project
### How to get started</br> 
- Start gulp watch with</br>
```
npm run gulp
```
* Choose an animation you want to work on e.g (fade-in, move-up) 
* Check the animations folder (CssLib >> css >> animations) to see the once I have worked on
* Create a file starting the name with ( _ ), so gulp will ignore it while compiling e.g "_bounce"
* You can create variables in the "_variables.scss" file (CssLib >> ibk >> variables.scss)
* Don't forget to capture multiple ways of each animation effect

---
### Bounce 
Animation-duration for bounce is 2sec <br>

**How the classes can be called and Examples**

(preffered-animation).(animation-timing-function).(animation-iteration-count)
```
.bounce-ease-infinite
.bounce-linear-6
.bounce-ease-in-4
.bounce-ease-out-2
```
---
### Blink 

Durations | Avail options |
--- | --- |
vfast: | 100ms| 
fast: | 200ms| 
normal: | 500ms| 
slow: | 1s| 
vslow: | 2s| 

**itrations count available is in multiples of 2s from 2 to 20 and infinite**

[blink] | [animation-duration] | [animation-iteration-count]

```
Examples of Classes that can be called
.blink-vfast-8
.blink-vfast-infinite
```
---

### Fade in & out
Durations|Avail options|			
--- | --- |
vfast| 1s
fast|1.5s
normal|2s
slow|2.5s
vslow|3s

**Itrations count is of 2s from 2 to 20 and infinite**

[fade-in] - [animation-duration] - [animation-iteration-count]

```
Examples of Classes that can be called
.fade-in-vslow-10  
.fade-in-vfast-infinite
.fade-out-vslow-10  
.fade-out-fast-infinite
```
