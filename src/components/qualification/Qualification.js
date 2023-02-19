import './qualification.css';
import { useState, useEffect } from '../../libs';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    useEffect(() => {
        const btns = document.querySelectorAll('.qualification__button');
        for (const btn of btns) {
            const index = Number(btn.dataset.index);
            btn.addEventListener('click', () => {
                console.log(index);
                setToggleState(index);
            });
        }
    }, [toggleState]);

    const buttonClasses = 'qualification__button button--flex';
    const contentClasses = 'qualification__content';

    return /*html*/ `
        <section class="qualification section" id="qualification">
            <h2 class="section__title">Qualification</h2>
            <span class="section__subtitle">My personal journey</span>

            <div class="qualification__container container">
                <div class='qualification__tabs'>
                    <div class="${
                        toggleState === 1
                            ? buttonClasses + ' qualification__button-active'
                            : buttonClasses
                    }" data-index="1">
                        <i class='uil uil-graduation-cap qualification__icon'></i> Education
                    </div>
                    <div class="${
                        toggleState === 2
                            ? buttonClasses + ' qualification__button-active'
                            : buttonClasses
                    }" data-index="2">
                        <i class='uil uil-briefcase-alt qualification__icon'></i> Experience
                    </div>
                </div>

                <div class='qualification__sections'>
                    <div class="${
                        toggleState === 1
                            ? contentClasses + ' qualification__content-active'
                            : contentClasses
                    }">
                        <div class='qualification__data'>
                            <div>
                                <h3 class='qualification__title'>Web Design</h3>
                                <span class='qualification__subtitle'>FPT Polytechnic</span>
                                <div class='qualification__calender'>
                                    <i class='uil uil-calendar-alt'></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span class='qualification__rounder'></span>
                                <span class='qualification__line'></span>
                            </div>
                        </div>

                        <div class='qualification__data'>
                            <div></div>

                            <div>
                                <span class='qualification__rounder'></span>
                                <span class='qualification__line'></span>
                            </div>
                            <div>
                                <h3 class='qualification__title'>Art Director</h3>
                                <span class='qualification__subtitle'>FPT Polytechnic</span>
                                <div class='qualification__calender'>
                                    <i class='uil uil-calendar-alt'></i> 2021 - Present
                                </div>
                            </div>

                        </div>

                        <div class='qualification__data'>
                            <div>
                                <h3 class='qualification__title'>Web Development</h3>
                                <span class='qualification__subtitle'>FPT Polytechnic</span>
                                <div class='qualification__calender'>
                                    <i class='uil uil-calendar-alt'></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span class='qualification__rounder'></span>
                                <span class='qualification__line'></span>
                            </div>
                        </div>

                        <div class='qualification__data'>
                            <div></div>

                            <div>
                                <span class='qualification__rounder'></span>
                                <span class='qualification__line'></span>
                            </div>
                            <div>
                                <h3 class='qualification__title'>UX Expert</h3>
                                <span class='qualification__subtitle'>FPT Polytechnic</span>
                                <div class='qualification__calender'>
                                    <i class='uil uil-calendar-alt'></i> 2021 - Present
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="${
                        toggleState === 2
                            ? contentClasses + ' qualification__content-active'
                            : contentClasses
                    }">
                        <div class='qualification__data'>
                            <div>
                                <h3 class='qualification__title'>Web Design</h3>
                                <span class='qualification__subtitle'>FPT Polytechnic</span>
                                <div class='qualification__calender'>
                                    <i class='uil uil-calendar-alt'></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span class='qualification__rounder'></span>
                                <span class='qualification__line'></span>
                            </div>
                        </div>

                        <div class='qualification__data'>
                            <div></div>

                            <div>
                                <span class='qualification__rounder'></span>
                                <span class='qualification__line'></span>
                            </div>
                            <div>
                                <h3 class='qualification__title'>Art Director</h3>
                                <span class='qualification__subtitle'>FPT Polytechnic</span>
                                <div class='qualification__calender'>
                                    <i class='uil uil-calendar-alt'></i> 2021 - Present
                                </div>
                            </div>

                        </div>

                        <div class='qualification__data'>
                            <div>
                                <h3 class='qualification__title'>Web Development</h3>
                                <span class='qualification__subtitle'>FPT Polytechnic</span>
                                <div class='qualification__calender'>
                                    <i class='uil uil-calendar-alt'></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span class='qualification__rounder'></span>
                                <span class='qualification__line'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
};

export default Qualification;
