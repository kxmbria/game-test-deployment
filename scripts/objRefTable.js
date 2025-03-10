const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Behaviors.Sin,
		C3.Plugins.Keyboard,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.scrollto.Acts.Shake,
		C3.Plugins.Sprite.Acts.StopAnim,
		C3.Plugins.Sprite.Acts.SetDefaultColor,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{ScrollTo: 0},
	{BoundToLayout: 0},
	{Blocky: 0},
	{Solid: 0},
	{Ground: 0},
	{Sine: 0},
	{Wall: 0},
	{Keyboard: 0},
	{Spikes: 0},
	{diamond: 0},
	{Door: 0}
];

self.InstanceType = {
	Blocky: class extends self.ISpriteInstance {},
	Ground: class extends self.ITiledBackgroundInstance {},
	Platform: class extends self.ITiledBackgroundInstance {},
	Wall: class extends self.ITiledBackgroundInstance {},
	Keyboard: class extends self.IInstance {},
	Spikes: class extends self.ISpriteInstance {},
	diamond: class extends self.ISpriteInstance {},
	Door: class extends self.ISpriteInstance {}
}