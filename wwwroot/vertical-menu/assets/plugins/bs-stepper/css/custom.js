.bs - stepper {
    background - color: #FFF;
    box - shadow: 0 4px 24px 0 rgba(34, 41, 47, .1);
    border - radius: .5rem;
}

.bs - stepper.bs - stepper - header {
    padding: 1.5rem;
    flex - wrap: wrap;
    border - bottom: 1px solid rgba(34, 41, 47, .08);
    margin: 0;
}

.bs - stepper.bs - stepper - header.line {
    flex: 0;
    min - width: auto;
    min - height: auto;
    background - color: transparent;
    margin: 0;
    padding: 0 1.75rem;
    color: #6E6B7B;
    font - size: 1.5rem;
}

.bs - stepper.bs - stepper - header.step {
    margin: .25rem 0;
}

.bs - stepper.bs - stepper - header.step.step - trigger {
    display: flex;
    flex - wrap: nowrap;
    padding: 0;
    font - weight: 400;
}

.bs - stepper.bs - stepper - header.step.step - trigger.bs - stepper - box {
    display: flex;
    align - items: center;
    justify - content: center;
    width: 38px;
    height: 38px;
    padding: .5em 0;
    font - weight: 500;
    color: #BABFC7;
    background - color: rgba(186, 191, 199, .12);
    border - radius: .35rem;
}

.bs - stepper.bs - stepper - header.step.step - trigger.bs - stepper - label {
    text - align: left;
    margin: .5rem 0 0 1rem;
}

.bs - stepper.bs - stepper - header.step.step - trigger.bs - stepper - label.bs - stepper - title {
    color: #6E6B7B;
    font - weight: 600;
    line - height: 1rem;
    margin - bottom: 0;
}

.bs - stepper.bs - stepper - header.step.step - trigger.bs - stepper - label.bs - stepper - subtitle {
    font - weight: 400;
    font - size: .85rem;
    color: #B9B9C3;
}

.bs - stepper.bs - stepper - header.step.active.step - trigger.bs - stepper - box {
    background - color: #7367F0;
    color: #FFF;
    box - shadow: 0 3px 6px 0 rgba(115, 103, 240, .4);
}

.bs - stepper.bs - stepper - header.step.active.step - trigger.bs - stepper - label.bs - stepper - title {
    color: #7367F0;
}

.bs - stepper.bs - stepper - header.step.crossed.step - trigger.bs - stepper - box {
    background - color: rgba(115, 103, 240, .12);
    color: #7367F0!important;
}

.bs - stepper.bs - stepper - header.step.crossed.step - trigger.bs - stepper - label.bs - stepper - title {
    color: #B9B9C3;
}

.bs - stepper.bs - stepper - header.step.crossed + .line {
    color: #7367F0;
}

.bs - stepper.bs - stepper - content {
    padding: 1.5rem;
}

.bs - stepper.bs - stepper - content.content {
    margin - left: 0;
}

.bs - stepper.bs - stepper - content.content.content - header {
    margin - bottom: 1rem;
}

.bs - stepper.vertical.bs - stepper - header {
    border - right: 1px solid #EBE9F1;
    border - bottom: none;
}

.bs - stepper.vertical.bs - stepper - header.step.step - trigger {
    padding: 1rem 0;
}

.bs - stepper.vertical.bs - stepper - content {
    width: 100 %;
    padding - top: 2.5rem;
}

.bs - stepper.wizard - modern {
    background - color: transparent;
    box - shadow: none;
}

.bs - stepper.wizard - modern.bs - stepper - header {
    border: none;
}

.bs - stepper.wizard - modern.bs - stepper - content {
    background - color: #FFF;
    border - radius: .5rem;
    box - shadow: 0 4px 24px 0 rgba(34, 41, 47, .1);
}

.dark - layout.bs - stepper {
    background - color: #283046;
    box - shadow: 0 4px 24px 0 rgba(34, 41, 47, .24);
}

.dark - layout.bs - stepper.bs - stepper - header {
    border - bottom: 1px solid rgba(59, 66, 83, .08);
}

.dark - layout.bs - stepper.bs - stepper - header.line {
    color: #B4B7BD;
}

.dark - layout.bs - stepper.bs - stepper - header.step.step - trigger.bs - stepper - box {
    color: #BABFC7;
}

.dark - layout.bs - stepper.bs - stepper - header.step.step - trigger.bs - stepper - label.bs - stepper - title {
    color: #B4B7BD;
}

.dark - layout.bs - stepper.bs - stepper - header.step.step - trigger.bs - stepper - label.bs - stepper - subtitle {
    color: #676D7D;
}

.dark - layout.bs - stepper.bs - stepper - header.step.active.step - trigger.bs - stepper - box {
    background - color: #7367F0;
    color: #FFF;
    box - shadow: 0 3px 6px 0 rgba(115, 103, 240, .4);
}

.dark - layout.bs - stepper.bs - stepper - header.step.active.step - trigger.bs - stepper - label.bs - stepper - title {
    color: #7367F0;
}

.dark - layout.bs - stepper.bs - stepper - header.step.crossed.step - trigger.bs - stepper - label,
.dark - layout.bs - stepper.bs - stepper - header.step.crossed.step - trigger.bs - stepper - title {
    color: #676D7D;
}

.dark - layout.bs - stepper.vertical.bs - stepper - header {
    border - right - color: #3B4253;
}

.dark - layout.bs - stepper.wizard - modern {
    background - color: transparent;
    box - shadow: none;
}

.dark - layout.bs - stepper.wizard - modern.bs - stepper - header {
    border: none;
}

.dark - layout.bs - stepper.wizard - modern.bs - stepper - content {
    background - color: #283046;
    box - shadow: 0 4px 24px 0 rgba(34, 41, 47, .24);
}

html[data - textdirection= rtl] .btn - next,
    html[data - textdirection= rtl] .btn - prev {
    display: flex;
}

html[data - textdirection= rtl] .btn - next i,
    html[data - textdirection= rtl] .btn - next svg,
        html[data - textdirection= rtl] .btn - prev i,
            html[data - textdirection= rtl] .btn - prev svg {
    transform: rotate(-180deg);
}

@media(max - width: 992px) {
  .bs - stepper.bs - stepper - header {
        flex - direction: column;
        align - items: flex - start;
    }

  .bs - stepper.bs - stepper - header.step.step - trigger {
        padding: .5rem 0!important;
        flex - direction: row;
    }

  .bs - stepper.bs - stepper - header.line {
        display: none;
    }

  .bs - stepper.vertical {
        flex - direction: column;
    }

  .bs - stepper.vertical.bs - stepper - header {
        align - items: flex - start;
    }

  .bs - stepper.vertical.bs - stepper - content {
        padding - top: 1.5rem;
    }
}
