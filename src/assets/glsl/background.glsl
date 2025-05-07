#include "/node_modules/lygia/generative/random.glsl"
#include "/node_modules/lygia/generative/snoise.glsl"

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution.xy;
	vec2 n_st = vec2(st.x * u_resolution.x/u_resolution.y, st.y);
	vec3 color = vec3(1.0);

	float is_desktop = step(768.0, u_resolution.x);
	float is_mobile = 1.0 - is_desktop;

	float n_col = 4.0;
	float w_col = u_resolution.x / n_col;
	float w_col_px = 1.0 / w_col * 1.0;

	// Scale
	st.x *= n_col;

	// Tile
	vec2 i_st = floor(st);
	vec2 f_st = fract(st);

	// Simplex
	float d3 = snoise(vec3(n_st.x * 5.0, n_st.y * 5.0 + u_time * 0.2, u_time * 0.2)) * 0.5 + 0.5;

	// Vertical lines
	float is_even = mod(i_st.x, 2.0);
	float is_odd = 1.0 - is_even;
	float threshold = w_col_px * 0.5;
	color = mix(
		color,
		vec3(0.0),
		// Beginning and end of each tile
		(
			step(f_st.x, threshold) * (is_odd * (0.5 + 0.5 * is_mobile) + 0.5 * is_desktop)
			+ step(1.0 - threshold, f_st.x) * (is_even * (0.5 + 0.5 * is_mobile) + 0.5 * is_desktop)
		) * smoothstep(0.2, 0.4, d3)
	);

	// Noise
	color *= 1.0 - random(vec3(st, floor(u_time * 5.0))) * 0.05 * (d3 * 0.3 + 0.7);

	// Fade-in effect
	float fade_in = smoothstep(1.0, 5.0, u_time);

	gl_FragColor = vec4(color * fade_in, fade_in);
	// gl_FragColor = vec4(vec3(d3), fade_in);
}
