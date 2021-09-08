/* eslint-disable @typescript-eslint/no-non-null-assertion */
import canvasSketch, { SketchFunction, SettingsObject } from "canvas-sketch";
import { RefObject } from "react";

export class CNVSSketch {
	ref: RefObject<HTMLCanvasElement | undefined>;
	settings: SettingsObject;

	constructor(_ref: RefObject<HTMLCanvasElement | undefined>, _settings: SettingsObject) {
		this.ref = _ref;
		this.settings = _settings;

		this.sketch();
		this.render();
	}

	sketch(): SketchFunction {
		const sketch: SketchFunction = ({ context, width, height }) => {
			const margin = 1 / 4;

			context.fillStyle = "hsl(0, 0%, 98%)";
			context.fillRect(0, 0, width, height);

			const fill = context.createLinearGradient(0, 0, width, height);
			fill.addColorStop(0, "cyan");
			fill.addColorStop(1, "orange");

			context.fillStyle = fill;
			context.fillRect(margin, margin, width - margin * 2, height - margin * 2);
		};

		return sketch;
	}

	render(): void {
		return canvasSketch(this.sketch, { ...this.settings, canvas: this.ref.current! });
	}
}
